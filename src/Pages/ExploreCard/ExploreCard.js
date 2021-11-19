import React from 'react';
import { Link } from 'react-router-dom';

const ExploreCard = (props) => {
    const {name, img, description, price, _id} = props.service;
    return (
        <div class="col col-12 col-md-6 col-lg-4 mb-3" style={{textAlign: 'left'}}>
            <div style={{textAlign: 'left'}} class="card h-100 border-0 shadow-lg">
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>                
                <h5 class="card-text">${price}</h5>
                                  
            </div>
            <div class="m-3">            
            
            <Link to={`/purchase/${_id}`}>
                <button class="btn btn-primary">Buy Now</button>
            </Link>
           
                
            </div>
            </div>
        </div>
    );
};

export default ExploreCard;