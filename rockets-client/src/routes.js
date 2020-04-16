// ./react-redux-client/src/routes.js
import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Arch from './components/Arch'

export default (
  <>
  <Route path="/" component={App}>
 
  </Route>
   <Route path="/arch" component={Arch} />
   </>
)
