import React, { useEffect } from 'react'
import { supabase } from '../supabaseClient.js'

const MainPage = () => {


  useEffect(() => {
    const refreshToken = async () => {
      await supabase
        .channel('schema-db-changes')
        .on(
          'postgres_changes',
          {
                  event: 'UPDATE',
                  schema: 'public',
                  table: 'UserRoles',
          },
          (payload) => {
            console.log(payload)
            supabase.auth.refreshSession()
          },
        )
        .subscribe()

      // await supabase
      //   .channel('schema-db-changes')
      //   .on(
      //     'postgres_changes',
      //     {
      //       event: 'INSERT',
      //       schema: 'public',
      //       table: 'UserRoles',
      //     },
      //     (payload) => {
      //       console.log(payload)
      //       supabase.auth.refreshSession()
      //     },
      //   )
      //   .subscribe()
    }

    refreshToken().then()
  }, [])


  return (
    <div>
      <header>
        <div style={{ marginTop: '20px' }}>
          <button onClick={async () => await supabase.auth.signOut()}>Sign out</button>
        </div>
      </header>

      <div style={{ marginTop: '20px' }}>
        <button>Admin</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button>Moderator</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button>User</button>
      </div>


    </div>
  )
}

export default MainPage