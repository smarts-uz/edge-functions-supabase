import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './supabaseClient'
import MyAuth from './pages/MyAuth.jsx'
import Account from './Account'

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
      {!session ? <MyAuth /> : <Account key={session.user.id} session={session} />}
    </div>
  )
}

export default App
