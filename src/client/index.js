import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import store from '../store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      {Routes}
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App />,document.getElementById('root'))