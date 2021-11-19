import React from 'react';
import './MyOrdersCard.css';

const MyOrdersCard = (props) => {
    const {name, price, description, img, _id} = props.service;
    const handledelete = (_id) => {
        fetch(`https://hidden-reaches-55205.herokuapp.com/deleteOrder/${_id}`, {
            method: "DELETE"
        })
        console.log(_id);
        alert("Are you sure to Delete this?");
    }
    return (
        <div>
            <div className="service-card">
                <img src={img} alt="" />
                <div>
                    <h5 className="destination">{name}</h5> 
                    <p className="lh-base">{description}</p>                  
                    <h5>${price}</h5>                  
                </div>
                <button onClick={()=>handledelete(_id)} className="btn btn-danger">Cancle</button>
            </div>
        </div>
    );
};

export default MyOrdersCard;