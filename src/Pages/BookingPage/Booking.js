import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';




const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://hidden-reaches-55205.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService.data)
    },[])
    
    return (
        <div style={{marginTop:'100px'}}>
            <h2>Details of: {service.name}</h2>
            <h2>This is booking : {serviceId}</h2>
        </div>
    );
};

export default Booking;