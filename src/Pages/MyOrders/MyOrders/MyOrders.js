import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrdersCard from '../MyOrdersCard/MyOrdersCard';
import './MyOrders.css';

const MyOrders = () => {
    const {user} = useAuth();
    const [services, setServices] = useState([]);

    useEffect(()=> {
        fetch(`https://hidden-reaches-55205.herokuapp.com/myOrderss/${user.email}`)
        .then(res=> res.json())
        .then(data=> setServices(data))
    })


    return (
        <div>
            <h2 className="text">My Orders</h2>
            <div className="scard">
                {
                    services.map(service => <MyOrdersCard service={service} key={service._id}></MyOrdersCard> )
                }
            </div>
        </div>
    );
};

export default MyOrders;