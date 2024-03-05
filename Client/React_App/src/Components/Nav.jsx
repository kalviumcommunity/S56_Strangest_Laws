import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


function Nav() {
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
                    <button className="button-9" role="button">SignUp</button>
                    <button className="button-23" role="button">Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Nav
