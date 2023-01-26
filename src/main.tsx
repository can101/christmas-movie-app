import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './app'
import './assets/styles/global.scss'
import {store} from './features'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <Index/>
        </Provider>
    </React.StrictMode>
)
