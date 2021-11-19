import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setServices(data))
      }, []);
    return (
        <div style={{backgroundColor: '#2C3951', paddingBottom: '50px'}}>
            <section style={{paddingTop: '10px'}}  class="container my-5">
                <div style={{marginTop: '100px'}} class="row g-2">
                <h6 style={{color: '#ffffff'}}>New From Blog</h6>
                <h1 style={{color: '#ffffff'}}><span style={{color: '#f6b915'}}>Latest</span> News</h1>
                
                {
                    services.map(service => <Blog service={service} key={service.name}></Blog> )
                }
                </div>
            </section>
        </div>
    );
};

export default Blogs;