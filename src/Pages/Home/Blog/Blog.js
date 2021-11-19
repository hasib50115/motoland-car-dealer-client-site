import React from 'react';

const Blog = (props) => {
    const {name, img, description} = props.service;
    return (
        <div class="col col-12 col-md-6 col-lg-4" style={{textAlign: 'left'}}>
            <div style={{textAlign: 'left'}} class="card h-100 border-0 shadow-lg">
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>                     
            </div>
            <div class="m-3">
            
            <button class="btn btn-primary">Read More</button>
           
                
            </div>
            </div>
        </div>
    );
};

export default Blog;