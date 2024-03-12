import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataShow.css';
import Nav from './Nav';
import { Link } from 'react-router-dom'

function DataShow() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://strangest-laws.onrender.com/getLaws');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = (id) => {
    axios.delete('https://strangest-laws.onrender.com/deleteLaw/' + id)
      .then(result => {
        console.log(result)
        setData(data.filter(item => item._id !== id));
      })
      .catch(err => console.log(err))
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <div className='main-home'>
        <div className="insert">
          <div className="Add-line">
            <h1>Have a Strange Law to add??</h1>
            <Link to="/Insert"><button className="button-10" role="button">Add Here!!</button></Link>
          </div>
        </div>
        <div className="hero-flex">
          {data.map((item) => (
            <div key={item._id} className="card">
              <h1>{item.law}</h1>
              <h2>{item.description}</h2>
              <h3>Category:</h3>
              <p className='cate'>{item.category}</p>
              <h3>Year:</h3>
              <p className='cate'>{item.year}</p>
              <h3>Country:</h3>
              <p className='cate'>{item.country}</p>
              <div className="card-button">
                <Link to={`/UpdateLaw/${item._id}`} style={{ textDecoration: "none" }}><button>Update</button></Link>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DataShow;
