import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

import configureStore from './redux/configureStore.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={configureStore}>
      <BrowserRouter>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
)
