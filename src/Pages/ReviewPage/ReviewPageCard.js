import React from 'react';

const ReviewPageCard = (props) => {
    const {name, review, email, country} = props.service;
    return (
        <div>
            <div class="card" style={{width: "18rem", height:"250px", margin:"15px"}}>
                <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{country}</h6>
                <p class="card-text">{review}</p>
                <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </div>
    );
};

export default ReviewPageCard;