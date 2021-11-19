import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddAProduct = () => {
    const {user} = useAuth();
    const serviceAdded = () => {
        alert("Product Added Successfully.");
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user.email;
        fetch('http://localhost:5000/addaproduct',{
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
            <h2 className="text">Add a Product</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="name" {...register("name")} /> <br/> <br/>
            <input defaultValue="description" {...register("description")} /> <br/> <br/>
            <input defaultValue="price" {...register("price")} /> <br/> <br/>
            <input defaultValue="image link" {...register("img")} /> <br/> <br/>
            
            {errors.exampleRequired && <span>This field is required</span>}
            
            <br/>
            <input className="btn btn-warning" onClick={serviceAdded} type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;