import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';

const Update = () => {
    const { id } = useParams();
    const [law, setLaw] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [year, setYear] = useState("");
    const [country, setCountry] = useState("");
    const createdBy = getCookie('user');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://strangest-laws.onrender.com/getLaws/${id}`)
            .then(result => {
                console.log(result);
                setLaw(result.data.law);
                setDescription(result.data.description);
                setCategory(result.data.category);
                setYear(result.data.year);
                setCountry(result.data.country);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://strangest-laws.onrender.com/UpdateLaw/${id}`, { law, description, year, category, country, createdBy })
            .then(result => {
                console.log(result);
                navigate('/Data');
            })
            .catch(err => console.log(err));
    };

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    return (
        <>
            <div className="Insert-main">
                <Nav />
                <div className="Insert-flex">
                    <div className="Insert-form">
                        <h1>Update Page</h1>
                        <form onSubmit={handleSubmit} className='form-insert'>
                            <label>law:</label>
                            <input type="text" value={law} onChange={(e) => setLaw(e.target.value)} id='law' />
                            <label>description:</label>
                            <textarea type="textarea" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" required id='description' />
                            <label>category:</label>
                            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required id='category' />
                            <label>year:</label>
                            <input type="text" value={year} onChange={(e) => setYear(e.target.value)} required id='year' />
                            <label>country:</label>
                            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required id='country' />
                            <button type="submit" className="button-10" id='lawBtn'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Update;
