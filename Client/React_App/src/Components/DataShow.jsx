import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataShow.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function DataShow() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState('All users');

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
        console.log(result);
        setData(data.filter(item => item._id !== id));
      })
      .catch(err => console.log(err));
  };

  const dropDown = async () => {
    try {
      const response = await axios.get('https://strangest-laws.onrender.com/postUser');
      const uniqueUsers = ['All users', ...new Set(response.data.map(item => item.userName))];
      setUser(uniqueUsers);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    dropDown();
  }, []);

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  let filteredData = [...data];
  if (selectedUser !== 'All users') {
    filteredData = data.filter(item => item.createdBy === selectedUser);
  }

  return (
    <>
      <Nav />
      <div className='main-home1'>
        <div className="insert">
          <div className="Add-line">
            <h1>Have a Strange Law to add??</h1>
            <Link to="/Insert"><button className="button-10" role="button">Add Here!!</button></Link>
          </div>
        </div>
        <div className="dropDown" style={{ display: 'flex', justifyContent: 'end', marginTop: '10px', alignItems: 'center', width: '100%'}}>
          <h3 style={{ color: 'black' }}>Select User to View Laws</h3>
          <select name="user" id="user" onChange={handleUserChange} value={selectedUser} style={{ width: '110px', height: '30px', margin: '10px', cursor: 'pointer'  }}>
            {user.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="hero-flex">
          {filteredData.length === 0 ? <p>No data</p> :
            filteredData.map((item) => (
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
                  <Link to={`/UpdateLaw/${item._id}`} style={{ textDecoration: "none" }}><button className='update-btn'>Update</button></Link>
                  <button onClick={() => handleDelete(item._id)} className='delete-btn'>Delete</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default DataShow;
