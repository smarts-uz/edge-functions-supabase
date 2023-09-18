import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from './utils/supabaseClient'

// ReactDOM.render(
//   <React.StrictMode>
//     <Auth.UserContextProvider supabaseClient={supabase}>
//       <App />
//     </Auth.UserContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Auth.UserContextProvider supabaseClient={supabase}>
            <App />
        </Auth.UserContextProvider>
    </React.StrictMode>,
)