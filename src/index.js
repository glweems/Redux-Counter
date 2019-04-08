import 'bulma/css/bulma.css'

import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import counter from './reducers'
import { createStore } from 'redux'
import Counter from './components/Counter'

const store = createStore(counter)

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)
