import {Auth, ThemeSupa} from '@supabase/auth-ui-react'
import Layout from "./Layout.jsx";
import {supabase} from "./utils/supabaseClient.js";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    const {user} = Auth.useUser()
    return (
        <>
            {
                user ? (<Layout/>)
                    :
                    (<div className='container' style={{marginTop:'150px'}}>
                        <Auth supabaseClient={supabase} appearance={{theme: ThemeSupa}}/>
                    </div>)
            }
        </>
    )
}

export default App