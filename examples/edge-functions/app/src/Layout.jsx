import React from 'react';
import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import {main_nav} from "./routes.js";



const Layout = () => {
    const routes =
        <Routes>
            {main_nav.map((items, index)=>{
                return(
                    <Route key={index} path={items.path} element={items.element}/>
                )
            })}
        </Routes>
    return (
        <div>
            <Header />
            {routes}
        </div>
    );
};

export default Layout;