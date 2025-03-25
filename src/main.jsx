import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvidert } from './Constext/AuthContext.jsx'

createRoot(document.getElementById('root')).render(

<AuthProvidert>
    <App />
</AuthProvidert>

,
)
