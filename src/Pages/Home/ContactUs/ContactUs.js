import React from 'react';
import './ContactUs.css';




const ContactUs = () => {
    return (
        <div className="my-5 ">
        
        <div className="mx-auto form-area">
        <h2 className="mb-3">Contact us</h2>
            <div className="row mb-3">
                <div class="col col-12 col-md-6 col-lg-4 mb-3">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="text" class="form-control" id="inputPassword2" placeholder="first name"/>
                </div>
                <div class="col col-12 col-md-6 col-lg-4">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="text" class="form-control" id="inputPassword2" placeholder="last name"/>
                </div>
            </div>
            <div className="row mb-3">
                <div class="col col-12 col-md-6 col-lg-4 mb-3">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="text" class="form-control" id="inputPassword2" placeholder="email"/>
                </div>
                <div class="col col-12 col-md-6 col-lg-4">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="text" class="form-control" id="inputPassword2" placeholder="phone number"/>
                </div>
            </div>
            <div className="row ">
                <div className="col col-12 col-md-6 col-lg-4 mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"></label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="message"></textarea>
                </div>
            </div>
            <div style={{textAlign: 'left'}}>
                <button  className="btn btn-warning ">Submit</button>
            </div>
        </div>
        
            
        </div>
    );
};

export default ContactUs;