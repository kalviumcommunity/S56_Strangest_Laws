import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function Nav() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = getCookie('token');

        if (token) {
            setLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
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
                    <Link to={"/"} style={{ textDecoration: "none" }}><h1 style={{ color: "#0bb864" }}>Lex Stulta</h1></Link>
                </div>
                <div className='input'>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'Search' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
                <div className="options">
                    {loggedIn ? (
                        <button className="button-23" onClick={handleLogout} role="button">Logout</button>
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
