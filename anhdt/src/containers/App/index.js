import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../../configStore'
import AppComponent from '../../components/App'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppComponent />
      </Router>
    </Provider>
  )
}

export default App
