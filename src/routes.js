import React from 'react'
import Home from './containers/home.container';
import Info from './containers/info.container';

const routes = [
    { path: '/', exact: true, component: <Home /> },
    { path: '/info/:id', exact: false, component: <Info /> }
]
export default routes;