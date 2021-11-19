import React, { useState } from 'react';

const OrderTable = (props) => {
    const {name, address, phone, img, _id, status} = props.order;
    const [statuss, setStatuss] = useState('');
    const handleStatus = (e)=>{
        setStatuss(e.target.value);
    }
    console.log(statuss);
    
    const handledelete = (_id) => {
        alert("Are you sure to delete this?")
        fetch(`https://hidden-reaches-55205.herokuapp.com/deleteOrder/${_id}`, {
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
            <td><input onChange={handleStatus} type="text" defaultValue={status} /></td>            
            
            
            <button onClick={()=>handledelete(_id)} className="btn btn-danger">Delete</button>
            <button onClick={()=> handleUpdate(_id)} className="btn btn-primary">Update</button>
            
        </tr>
    );
};

export default OrderTable;