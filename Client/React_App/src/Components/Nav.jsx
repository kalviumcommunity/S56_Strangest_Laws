import React, { useState, useEffect } from 'react';
import { Link,Navigate,useNavigate } from 'react-router-dom';

function Nav() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = getCookie('token');
        const user = getCookie('user');

        if (token && user) {
            setLoggedIn(true);
        }
    }, []);


    const handleLogout = () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        document.cookie = 'user=; expires=Fri, 01 April 1999 12:00:00 UTC;';
        setLoggedIn(false);
    };

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);

        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    
        return null;
    };

    return (
        <div className="main">
            <nav className="navbar">
                <div className="logo">
                    <Link to={"/"} style={{ textDecoration: "none",fontSize:'22px' }}><h1 style={{ color: "#0bb864" }}>Lex Stulta</h1></Link>
                </div>
                <div className="options">
                    {loggedIn ? (
                        <Link to={"/"}><button className="button-23" onClick={handleLogout} role="button">Logout</button></Link>
                    ) : (
                        <>
                            <Link to={"/Login"}><button className="button-23" role="button">Login</button></Link>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Nav;
