import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div class="container">
            <a class="navbar-brand" href="#">
                <h2 className="logo mobile-logo"><span>MOTO</span>LAND</h2>                
                
            </a>
            <button class="navbar-toggler navbar-light bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        
                    </li>
                   
                </ul>
                <form class="d-flex navbar-nav me-auto mb-2 mb-lg-0">
                    <div className="nav-item">
                        <Link className="nav-anchor navigation" to='homepage'>homepage</Link>
                    </div>
                </form>
            </div>
            </div>
        </nav>
    </div>
    );
};

export default Navigation;


// <h2 className="logo"><span>MOTO</span>LAND</h2>



/* <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Shoes">Shoes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Backpack">Backpack</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Subscribe">Subscribe</a>
                    </li> */