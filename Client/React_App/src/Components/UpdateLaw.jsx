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
        axios.put("https://strangest-laws.onrender.com/updateUser/" + id, { law, description, category, year, country })
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Update Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="joke">law:</label>
                    <input type="number" id="law" name="law" value={law} onChange={(e) => setLaw(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="joke">description:</label>
                    <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" required />
                </div>
                <div>
                    <label htmlFor="rating">category:</label>
                    <input type="text" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="category">year:</label>
                    <input type="text" id="year" name="year" value={year} onChange={(e) => setYear(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="joke">country:</label>
                    <input type="date" id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;