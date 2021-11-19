import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://hidden-reaches-55205.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
      }, []);
    return (
        <div>
        <section  class="container my-5">
            <div style={{marginTop: '100px', textAlign: 'left'}} class="row g-2">
            <h1 className='my-3'>Check our new car</h1>
            {
                services.map(service => <Service service={service} key={service.name}></Service> )
            }
            </div>
        </section>
        </div>
    );
};

export default Services;