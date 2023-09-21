import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from './utils/supabaseClient'
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth.UserContextProvider supabaseClient={supabase}>
                <App />
            </Auth.UserContextProvider>
        </BrowserRouter>

    </React.StrictMode>,
)