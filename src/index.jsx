import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';



const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

  ReactDOM.render(
    <HashRouter>
     <Provider store={store}>
       <App/>
     </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
