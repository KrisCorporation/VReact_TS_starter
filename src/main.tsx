import React from 'react'
import ReactDOM from 'react-dom/client'

import store from './store/store'
import { Provider } from 'react-redux'

import App from './App'
import Debug from './debug'

// import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <div className='test'>
        <Debug />
        <App />
      </div>
    </Provider>
  // </React.StrictMode>
)

console.log(store.getState())
