import React, { useState } from 'react';
import "./InsertLaw.css";
import Nav from './Nav';
import { useForm } from "react-hook-form";
import axios from 'axios';

const InsertLaw = () => {
    const { register, formState: { errors } } = useForm();

    const [law, setLaw] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [year, setYear] = useState("");
    const [country, setCountry] = useState("");
    const createdBy = document.cookie
        .split('; ')
        .find(row => row.startsWith('user='))
        .split('=')[1];

    const Submit = (e) => {
        e.preventDefault();
        console.log("name", createdBy)

        const data = { law, description, category, year, country, createdBy };

        console.log("Submitting data:", data);

        axios.post("https://strangest-laws.onrender.com/post", data)
            .then(result => {
                console.log("Response:", result);
            })
            .catch(err => {
                console.error("Error:", err);
            });

    };

    return (
        <>
            <div className='Insert-main'>
                <Nav />
                <div className="Insert-flex">
                    <div className="Insert-form">
                        <form className='form-insert' onSubmit={Submit}>
                            <h1>Insert your Law</h1>
                            <label>Law:</label>
                            <input {...register("law", { required: true })} onChange={(e) => setLaw(e.target.value)} id='law' />
                            {errors.law && <span>This field is required</span>}

                            <label>Description:</label>
                            <textarea {...register("description", { required: true })} rows="2" onChange={(e) => setDescription(e.target.value)} id='description' />
                            {errors.description && <span>This field is required</span>}

                            <label>Category:</label>
                            <input {...register("category", { required: true })} onChange={(e) => setCategory(e.target.value)} id='category' />
                            {errors.category && <span>This field is required</span>}

                            <label>Year:</label>
                            <input {...register("year", { required: true })} onChange={(e) => setYear(e.target.value)} id='year' />
                            {errors.year && <span>This field is required</span>}

                            <label>Country:</label>
                            <input {...register("country", { required: true })} onChange={(e) => setCountry(e.target.value)} id='country' />
                            {errors.country && <span>This field is required</span>}

                            <input type="submit" value="Submit" className="button-10" id='lawBtn' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InsertLaw;