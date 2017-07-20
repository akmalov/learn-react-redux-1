import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './containers/App';
import './app.css'
import configureStore from './store/configureStore'

const store = configureStore();

const render = Component => {
    ReactDOM.render(
        <AppContainer >
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
};

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => { render(App)})
}