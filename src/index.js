import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WhiskyList from './WhiskyList';
import WhiskyItem from './WhiskyItem';
import Whisky from './Whisky';
import PageNotFound from './PageNotFound';



ReactDOM.render((
<Router history={browserHistory}>
  <Route path="/" component={App}>
      <IndexRoute component={WhiskyList} />
      <Route path="/whiskies" component={WhiskyList}/>
      <Route path="/whiskies/:whiskyId" component={Whisky}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
), document.getElementById('root'));
