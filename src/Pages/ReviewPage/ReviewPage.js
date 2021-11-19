import React, { useEffect, useState } from 'react';
import './ReviewPage.css';
import ReviewPageCard from './ReviewPageCard';

const ReviewPage = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setServices(data))
      }, []);
    return (
        <div style={{marginTop:'80px'}}>
            <h1>Reviews</h1>
            <h2 style={{marginBottom:'50px'}}>From Our Valuable Customers</h2>
            <div className="services-cards">
            {
                services.map(service => <ReviewPageCard service={service} key={service.name}></ReviewPageCard> )
            }
            </div>
        </div>
    );
};

export default ReviewPage;