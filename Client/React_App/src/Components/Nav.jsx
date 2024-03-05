import React from 'react'

function Nav() {
    return (
        <div className="main">
            <nav className="navbar">
                <div className="logo">
                    <h1>Lex Stulta</h1>
                </div>
                <div>
                    <input type="text" className='input-box' placeholder='Search' />
                </div>
                <div className="options">
                    <button className="button-9" role="button">SignUp</button>
                    <button className="button-9" role="button">Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Nav
