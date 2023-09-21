import {main_nav} from "../routes.js";
import {NavLink} from "react-router-dom";
import {supabase} from "../utils/supabaseClient.js";
import {Auth} from '@supabase/auth-ui-react'

const Header = () => {
    const {user} = Auth.useUser()

    return (

        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {main_nav.map((items, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink
                                            to={`/${items.path}`}
                                            className="nav-link px-2 text-white"
                                        >
                                            {items.title}
                                        </NavLink>
                                    </li>
                                )
                            }
                        )}
                    </ul>

                    <div className="text-end">
                        <span className='text-white'>{user.name}</span>
                        <button
                            type="button"
                            className="btn btn-warning me-2"
                            onClick={() => supabase.auth.signOut()}
                        >Sign-out
                        </button>

                    </div>
                </div>
            </div>
        </header>


)
}

export default Header
