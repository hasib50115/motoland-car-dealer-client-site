import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';

const Purchase = () => {
    const {user} = useAuth();
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const orderConfirm = ()=>{
        alert("Order Confirmed.");
    }  

    const onSubmit = data => {
        data.price = service.price;
        data.description = service.description;
        data.email = user.email;
        data.status = "pending";
        console.log(data);

        fetch('https://hidden-reaches-55205.herokuapp.com/confirmOrder', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
    }
    useEffect(() => {
        fetch(`https://hidden-reaches-55205.herokuapp.com/services/${serviceId}`)
        .then(res=> res.json()) 
        .then(data=> setService(data))
    }, [])
    useEffect(() => {
        fetch(`https://hidden-reaches-55205.herokuapp.com/explore/${serviceId}`)
        .then(res=> res.json()) 
        .then(data=> setService(data))
    }, [])
    console.log(service);
    
    return (
        <div style={{marginTop:'100px'}} className="detail-section">
            <h2 className="text">Purchase Page</h2>
            <div className="detail-area row">

                <div className="detail">
                    <divs style={{textAlign:'left'}} className="detail-card">
                        <img className="img-fluid" src={service.img} alt="" />
                        <div className="purchasecard-text">
                            <h5 className="text mt-3">{service.name}</h5>
                            <p className="text">{service.description}</p>
                            <h6 className="text">${service.price}</h6>
                        </div>
                        
                    </divs>
                </div>

                <div style={{width:'100%', margin:'auto'}} className="form-area">
                    <h2 className="my-5">Purchase Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input defaultValue={service.name} {...register("name")} /> <br/> <br/>
                    <input defaultValue="your address" {...register("address")} /> <br/> <br/>
                    <input defaultValue="phone number" {...register("phone")} /> <br/> <br/>
                    
                    {/* include validation with required or other standard HTML validation rules */}
                    <input defaultValue={service.img} {...register("img", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <br/> <br/>
                    <input className="btn btn-warning" onClick={orderConfirm} type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;


// https://quiet-refuge-54152.herokuapp.com/singleProduct/${serviceId}