import React from 'react'
import { Divider } from 'antd'
import { Switch, Route } from 'react-router-dom'

import * as AppStyle from './App.style'
import Header from '../Header'
import Footer from '../Footer'
import HomePage from '../HomePage'
import DetailPage from '../../containers/DetailPage'

const App = () => {
  return (
    <AppStyle.LayoutWrapper>
      
      <Header />

      <AppStyle.ContentWrapper>
        
        <AppStyle.ContentChildrenWrapper>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/detail/:id" component={DetailPage} />
          </Switch>

        </AppStyle.ContentChildrenWrapper>

      </AppStyle.ContentWrapper>

      <Divider />

      <Footer />

    </AppStyle.LayoutWrapper>
  )
}

export default App
