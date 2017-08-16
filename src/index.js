//react imports
import React from 'react';
import ReactDOM from 'react-dom';

//router imports
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

//import styles
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

//component imports
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import UserList from './containers/UserList';
import UserDetail from './containers/UserDetail';
import AccountDetail from './components/AccountDetail';

//create store for redux and apply middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);

//wrap provider around router
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users/:id/:accountID" component={AccountDetail} />
        <Route path="/users/:id" component={UserDetail} />
        <Route path="/users" component={UserList} />
      </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>


  , document.getElementById('root'));
