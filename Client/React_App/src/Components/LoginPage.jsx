import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import './LoginPage.css';
import axios from 'axios';

function LoginPage() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = getCookie('token');
        if (token) {
            setLoggedIn(true);
        }
    }, []);



    const handleLogin = async () => {
        console.log('username:', username);
        try {
            if (username !== '' && password !== '') {
                const response = await axios.post("https://strangest-laws.onrender.com/auth", {
                    username: username
                });

                console.log('Login:', response);

                const token = response.data;
                document.cookie = `token=${token}; expires=Fri, 1 April 2799 12:00:00 UTC; path=/;`;
                alert('Login Successful.!!');
                setTimeout(() => {
                    navigate('/');
                    setLoggedIn(true);
                }, 10);
            } else {
                alert('UserName and Password are Required!!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during login. Please try again.');
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
        document.cookie = 'token=; expires=Thu, 01 April 2000 12:00:00 UTC;';
        setLoggedIn(false);
    };

    return (
        <div >
            <Nav loggedIn={loggedIn} handleLogout={handleLogout} />
            <div className="Insert-login">
                <div className='Insert-loginform'>
                    <h1>Login Page</h1>
                    <div className='form-insert'>
                        <label id='loginlabel'>Enter UserName : </label>
                        <input type="text" onChange={(e) => setUserName(e.target.value)} id="txt-loginpage" />
                        <label id='loginlabel'>Enter Password : </label>
                        <input type="pass" onChange={(e) => setPassword(e.target.value)} id="txt-loginpage"/>
                        <div className="login-btns">
                            <button className="login-btn" onClick={handleLogin} >
                                Login
                            </button>
                            <Link to="/">
                                <button className="cancel-btn button-23 ">Cancel</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
