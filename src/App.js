import React, { Component } from 'react'
import {Provider} from 'react-redux'

import store from './store'
import TestForm from './TestForm'

import './App.css'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <TestForm />
      </Provider>
    )
  }
}

export default App
