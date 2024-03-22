import React, { useState, useEffect } from 'react';
import './HomePage.css';
import logo from './law.png';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function HomePage() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = getCookie('token');
        if (token) {
            setLoggedIn(true);
        }
    }, []);

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };

    return (
        <>
            <Nav/>
            <div className='main-home'>
                <div className="hero">
                    <div className="tagline">
                        <h1 style={{ color: "#0A9E57" }}>LEX STULTA</h1>
                        <h1>Unearth the Absurdity, Explore the World's Strangest Laws!</h1>
                        <div className="btns">
                            {loggedIn ? (
                                <Link to="/Data" style={{textDecoration: "none"}}>
                                    <button className="button-86" role="button">EXPLORE</button>
                                </Link>
                            ) : (
                                <Link to="/Login" style={{textDecoration: "none"}}>
                                    <button className="button-86" role="button">EXPLORE</button>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="hero-img">
                        <img src={logo} alt="" id='hero-img' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;