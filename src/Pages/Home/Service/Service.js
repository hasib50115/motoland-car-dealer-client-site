import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name, img, description, price, _id} = props.service;
    return (
        <div class="col col-12 col-md-6 col-lg-4">
                  <div style={{textAlign: 'left'}} class="card h-100 border-0 shadow-lg">
                    <img src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">{name}</h5>
                      <p class="card-text">{description}</p> 
                      <h5>${price}</h5>                    
                    </div>
                    <div class="m-3">
                      <Link to={`/purchase/${_id}`}>
                          <button class="panda-btn-buy-now btn-warning">Buy Now</button>
                      </Link>                        
                    </div>
                  </div>
        </div>
    );
};

export default Service;

// <Link className="nav-anchor" to={`/booking/${_id}`}><button>Order Now</button></Link>