import React from 'react';
import { rest_nav } from "../routes.js";
import {NavLink, Route, Routes} from "react-router-dom";

const Rest = () => {

    const routes =
        <Routes>
            {rest_nav.map((items, index)=>{
                return(
                    <Route key={index} path={items.path} element={items.element}/>
                )
            })}
        </Routes>



    return (
        <div className='container'>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0">
                {rest_nav.map((items, index) =>
                    {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={`${items.path}`}
                                    className="nav-link px-2 text-secondary"
                                >
                                    {items.title}
                                </NavLink>
                            </li>
                        )
                    }
                )}
            </ul>
            {routes}
        </div>
    );
};

export default Rest;