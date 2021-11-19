import React, { useEffect, useState } from 'react';
import ExploreCard from '../ExploreCard/ExploreCard';

const Explore = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/explore')
        .then(res => res.json())
        .then(data => setServices(data))
      }, []);
    return (
        <div style={{marginTop: '100px'}}>
            <h1 className="mb-5">explore page</h1>
            <div className="container">
                <div className=" row mb-3">
                {
                    services.map(service => <ExploreCard service={service} key={service.name}></ExploreCard> )
                }
                </div>
            </div>
        </div>
    );
};

export default Explore;