// 解决问题：
// 监听webpack构建的内容，读取。
// 而且静态资源文件读取没有真正的文件。
// 需要和webpack-dev-server关联起来

const path = require('path');
const webpack = require('webpack');
// 发请求
const axios = require('axios');
// fs内存版
const MemoryFS = require('memory-fs');
// 代理
const proxy = require('http-proxy-middleware');
const ReactDomServer = require('react-dom/server');
const serverConfig = require('../../build/webpack.config.server');

// 获取模板内容
const getTemplate = (url = 'http://localhost:8888/public/index.html') => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res.data);
        }).catch(reject);
    });
};
// [hack]：将字符串转换成js;
let stringToJs = (function () {
    const Module = module.constructor;
    return function (str, entryjs) {
        const m = new Module();
        // 注意这里的entryjs一定要有,缓存中好存取。
        m._compile(str, entryjs);
        return m.exports;
    };
})();

// ----------------------------------------
// 将流放入到内存中，加快打包速度
const serverCompiler = webpack(serverConfig);
const mfs = new MemoryFS();
// 指定编译输出
serverCompiler.outputFileSystem = mfs;
// webpack编译输出的js
let serverBundle = '';
// 监听
serverCompiler.watch({}, (err, stats) => {
    if (err) {
        throw err;
    }

    stats = stats.toJson();

    stats.errors.forEach(console.error);
    stats.warnings.forEach(console.warn);
    // 获取文件路径
    const buildPath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename,
    );
    const bundle = mfs.readFileSync(buildPath, 'utf-8');
    // 如何把str内容转换成js内容呢？
    let result = stringToJs(bundle, 'server-entry.js').default;
    serverBundle = result;
});

// ----------------------------------------
module.exports = function (app) {
    // 如何解决静态资源的问题呢？
    // npm  i http-proxy-middleware -D
    app.use('/public', proxy({
        target: 'http://localhost:8888'
    }));

    app.get('*', function (req, res) {
        getTemplate().then(template => {
            // 服务端渲染
            const content = ReactDomServer.renderToString(serverBundle);
            res.send(template.replace('<!-- app -->', content));
        });
    });
};
