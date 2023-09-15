import { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function MyAuth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()

        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({ email: event.target.value, password: event.target.value })


        if (error) {
            alert(error.error_description || error.message)
        } else {
            alert('Check your email for the login link!')
        }
        setLoading(false)
    }

    return (
        <div className="row flex flex-center">
            <div className="col-6 form-widget">
                <h1 className="header">Supabase + React</h1>
                <p className="description">Sign in via magic link with your email below</p>
                <form className="form-widget" onSubmit={handleLogin}>
                    <div>
                        <input
                            className="inputField"
                            type="email"
                            placeholder="Your email"
                            value={email}
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="inputField"
                            type="password"
                            placeholder="Your password"
                            value={password}
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className={'button block'} disabled={loading}>
                            {loading ? <span>Loading</span> : <span>Enter</span>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
