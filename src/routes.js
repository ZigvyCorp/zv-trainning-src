import React from 'react'
import Home from "./containers/home.conatiner"
import Info from "./pages/Info"

const routes = [
    { path: '/', exact: true, component: <Home /> },
    { path: '/info/:id', exact: false, component: <Info /> }
]
export default routes;