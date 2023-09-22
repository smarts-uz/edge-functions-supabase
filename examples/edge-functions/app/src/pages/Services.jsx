import React from 'react';
import {rest_nav, service_nav} from "../routes";
import {Routes, Route, NavLink} from 'react-router-dom'

const Services = () => {

    const routes =
        <Routes>
            {service_nav.map((items, index)=>{
                return(
                    <Route key={index} path={items.path} element={items.element}/>
                )
            })}
        </Routes>


    return (
        <div className='container'>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0">
                {service_nav.map((items, index) =>
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

export default Services;