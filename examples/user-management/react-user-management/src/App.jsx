import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './supabaseClient'
import Auth from './Auth.jsx'
import Account from './Account'
import MyAuth from "./pages/MyAuth.jsx";
import SignUp from "./pages/SignUp.jsx";
import SetPage from "./pages/SetPage.jsx";

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {/*{!session ? <Auth /> : <Account key={session.user.id} session={session} />}*/}
      {/*{!session ? <MyAuth /> : <Account key={session.user.id} session={session} />}*/}
      {/*{!session ? <SignUp /> : <Account key={session.user.id} session={session} />}*/}
      {!session ? <SetPage /> : <Account key={session.user.id} session={session} />}
    </div>
  )
}

export default App
