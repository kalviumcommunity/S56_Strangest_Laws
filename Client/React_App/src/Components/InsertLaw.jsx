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

    const Submit = (e) => {
        e.preventDefault();
        const data = { law, description, category, year, country };
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
                            <label>Law:</label>
                            <input {...register("law", { required: true })} onChange={(e) => setLaw(e.target.value)} />
                            {errors.law && <span>This field is required</span>}

                            <label>Description:</label>
                            <textarea {...register("description", { required: true })} rows="4" onChange={(e) => setDescription(e.target.value)} />
                            {errors.description && <span>This field is required</span>}

                            <label>Category:</label>
                            <input {...register("category", { required: true })} onChange={(e) => setCategory(e.target.value)} />
                            {errors.category && <span>This field is required</span>}

                            <label>Year:</label>
                            <input type="number" {...register("year", { required: true })} onChange={(e) => setYear(e.target.value)} />
                            {errors.year && <span>This field is required</span>}

                            <label>Country:</label>
                            <input {...register("country", { required: true })} onChange={(e) => setCountry(e.target.value)} />
                            {errors.country && <span>This field is required</span>}

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InsertLaw;
