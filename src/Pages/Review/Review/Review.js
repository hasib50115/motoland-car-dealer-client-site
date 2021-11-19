import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const serviceAdded = () => {
        alert("Review Added Successfully.");
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user.email;
        fetch('https://hidden-reaches-55205.herokuapp.com/addreview',{
            method:"POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result));
        console.log(data);
    }
    return (
        <div>
            <h2 className="text">Add a Review</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="name" {...register("name")} /> <br/> <br/>
            <input defaultValue="review" {...register("review")} /> <br/> <br/>
            <input defaultValue="country" {...register("country")} /> <br/> <br/>
            <input defaultValue="add rating (1-5)" {...register("rating")} /> <br/> <br/>
            
            {errors.exampleRequired && <span>This field is required</span>}
            
            <br/>
            <input className="btn btn-warning" onClick={serviceAdded} type="submit" />
            </form>
        </div>
    );
};

export default Review;