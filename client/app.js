import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {AppContainer} from 'react-hot-loader';

let root = document.getElementById('root');
// react-hot-loader规范
const render = Component => {
    let renderOrHydrate = root.innerHTML.trim().length ? 'hydrate' : 'render';
    // renderOrHydrate = 'render';

    ReactDOM[renderOrHydrate](
        <AppContainer>
            <Component/>
        </AppContainer>,
        root
    );
};
render(App);

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NextApp = require('./App.jsx').default;
        render(NextApp);
    });
}
