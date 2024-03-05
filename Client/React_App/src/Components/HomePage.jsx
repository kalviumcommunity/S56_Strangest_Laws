import React from 'react'
import './HomePage.css'
import Nav from './Nav';
import logo from './law.png'

function HomePage() {
    return (
        <div className='main-home'>
            <Nav />

            <div className="hero">
                <div className="tagline">
                    <h1>Unearth the Absurdity, Explore the World's Strangest Laws!</h1>
                    <div className="btns">
                        <div class="waitlistForm">
                            <button className="brandBtn">
                                Explore
                            </button>
                        </div>
                        <div className="waitlistForm">
                            <button className="brandBtn">
                                Explore
                            </button>
                        </div>
                    </div>

                </div>
                <div className="hero-img">
                    <img src={logo} alt="" id='hero-img' />
                </div>
            </div>
        </div>
    )
}

export default HomePage
