import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import { FlatProvider } from './contexts/flatContext.jsx';
import '@mantine/core/styles.css';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MantineProvider forceColorScheme="light" >
            <FlatProvider>
                <App />
            </FlatProvider>
        </MantineProvider>
    </React.StrictMode>,
)
