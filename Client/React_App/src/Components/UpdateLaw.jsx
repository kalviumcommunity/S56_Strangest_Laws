import React, { useState } from 'react';
import "./InsertLaw.css";
import Nav from './Nav';
import { useForm } from "react-hook-form";
import axios from 'axios';

const UpdateLaw = () => {
    const { register, formState: { errors } } = useForm();

    const [law, setLaw] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [year, setYear] = useState("");
    const [country, setCountry] = useState("");


    return (
        <>
            <div className='Insert-main'>
                <Nav />
                <div className="Insert-flex">
                    <div className="Insert-form">
                        <form className='form-insert' onSubmit={Submit}>
                            <label>Law:</label>
                            <input {...register("law", { required: true })} onChange={(e) => setLaw(e.target.value)} />

                            <label>Description:</label>
                            <textarea {...register("description", { required: true })} rows="4" onChange={(e) => setDescription(e.target.value)} />

                            <label>Category:</label>
                            <input {...register("category", { required: true })} onChange={(e) => setCategory(e.target.value)} />

                            <label>Year:</label>
                            <input type="number" {...register("year", { required: true })} onChange={(e) => setYear(e.target.value)} />

                            <label>Country:</label>
                            <input {...register("country", { required: true })} onChange={(e) => setCountry(e.target.value)} />

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateLaw;
