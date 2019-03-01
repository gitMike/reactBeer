'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import BreweryPage from './components/BreweryPage';
import NotFoundPage from './components/NotFoundPage';
import Beer from './components/Beer';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="brewery/:id" component={BreweryPage}/>

    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;