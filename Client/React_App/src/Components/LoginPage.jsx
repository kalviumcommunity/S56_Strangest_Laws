// LoginPage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import './LoginPage.css';

function LoginPage() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userNameCookie = getCookie('userName');
        const passwordCookie = getCookie('password');

        if (userNameCookie && passwordCookie) {
            setLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        if (username !== '' && password !== '') {
            document.cookie = `userName=${username}; expires=Fri, 1 April 2799 12:00:00 UTC;`;
            document.cookie = `password=${password}; expires=Fri, 1 April 2799 12:00:00 UTC;`;

            alert('Login Successful.!!');
            setTimeout(() => {
                navigate('/');
                setLoggedIn(true);
            }, 10);
        } else {
            alert('UserName and Password are Required!!');
        }
    };

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }

        return null;
    };

    const handleLogout = () => {
        document.cookie = 'userName=; expires=Thu, 01 April 2000 12:00:00 UTC;';
        document.cookie = 'password=; expires=Thu, 01 April 2000 12:00:00 UTC;';
        setLoggedIn(false);
    };

    return (
        <div>
            <Nav loggedIn={loggedIn} handleLogout={handleLogout} />
            <div>
                <h1>Login Page</h1>
                {loggedIn ? (
                    <div>
                        <p>You are already logged in. Do you want to logout?</p>
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        <label>Enter UserName : </label>
                        <input type="text" onChange={(e) => setUserName(e.target.value)} />
                        <label>Enter Password : </label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        <button className="login-btn" onClick={handleLogin}>
                            Login
                        </button>
                        <Link to="/">
                            <button className="cancel-btn">Cancel</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginPage;
