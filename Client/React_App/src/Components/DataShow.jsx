import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataShow.css';
import Nav from './Nav';

function DataShow() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://strangest-laws.onrender.com/getLaws');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 

  return (
    <div className='main-home'>
      <Nav />
      <div className="hero-flex">
        {data.map((item, index) => (
          <div key={index} className="card">
            <h1>{item.law}</h1>
            <h2>{item.description}</h2>
            <h3>Category:</h3>
            <p className='cate'>{item.category}</p>
            <h3>Year:</h3>
            <p className='cate'>{item.year}</p>
            <h3>Country:</h3>
            <p className='cate'>{item.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataShow;
