import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Update = () => {
    const { id } = useParams();
    const [law, setLaw] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [year, setYear] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        axios.get(`https://strangest-laws.onrender.com/getLaws/${id}`)
            .then(result => {
                console.log(result)
                setLaw(result.data.law)
                setDescription(result.data.description)
                setCategory(result.data.category)
                setYear(result.data.year)
                setCountry(result.data.country)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("https://strangest-laws.onrender.com/UpdateLaw/" + id, { law, description, year, category, country })
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Update Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>law:</label>
                    <input type="text" value={law} onChange={(e) => setLaw(e.target.value)} />
                </div>
                <div>
                    <label>description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" required />
                </div>
                <div>
                    <label>category:</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <div>
                    <label>year:</label>
                    <input type="text" value={year} onChange={(e) => setYear(e.target.value)} required />
                </div>
                <div>
                    <label>country:</label>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;