import React, { useState } from 'react';

const ManageProductsCard = (props) => {
    const {name, address, phone, img, _id, status} = props.order;
    const [statuss, setStatuss] = useState('');
    const handleStatus = (e)=>{
        setStatuss(e.target.value);
    }
    console.log(statuss);
    
    const handledelete = (_id) => {
        alert("Are you sure to delete this Product?")
        fetch(`https://hidden-reaches-55205.herokuapp.com/deleteProduct/${_id}`, {
            method: "DELETE"
        })
        console.log(_id);
    }

    const handleUpdate = (_id) => {
        fetch(`https://quiet-refuge-54152.herokuapp.com/updateStatus/${_id}`, {
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(statuss)
        })
    }
    
    return (
        <tr>
            <td>{name}</td>
            <td>{img}</td>          
            
            <button onClick={()=>handledelete(_id)} className="btn btn-danger">Delete</button>
            
        </tr>
    );
};

export default ManageProductsCard;