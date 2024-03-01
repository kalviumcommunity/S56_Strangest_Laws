import React from 'react';
import './DataShow.css';
import Nav from './Nav';

function DataShow() {
  return (
    <div className='main-home'>
      <Nav />
      <div className="hero-flex">
        <div className="card">
          <h1>Climbing trees without permission</h1>
          <h2>Climbing trees on public property without authorization is illegal.</h2>
          <h3>Category:</h3>
          <p className='cate'>Public Safety</p>
          <h3>Year:</h3>
          <p className='cate'>Varies</p>
          <h3>Country:</h3>
          <p className='cate'>Multiple Countries</p>
        </div>
      </div>
    </div>
  );
}

export default DataShow;
