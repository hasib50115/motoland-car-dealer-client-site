import React from 'react';

const Footer = () => {
    return (
        
            <div style={{backgroundColor: '#23292e'}}>
                <div style={{color: '#fffff'}} className="container py-5">
                    <div className="row">
                        <div style={{textAlign: 'left', color: 'lightgray'}} class="col col-12 col-md-6 col-lg-3 mb-3">
                            <h4>SHOWROOM</h4>
                            <p>KlbTheme, 789 Main rd, Anytown, <br/>
                            CA 12345 USA</p>
                            <p>+1 800 729 0000</p>
                            <p>motoland.info@gmail.com</p>
                            <p>Mon – Fri : 09am to 09pm</p>
                        </div>
                        <div style={{textAlign: 'left', color: 'lightgray'}} class="col col-12 col-md-6 col-lg-3 mb-3">
                            <h4>QUICK LINKS</h4>
                            <p>Blog</p>
                            <p>FAQ</p>
                            <p>payment</p>
                            <p>Shipment</p>
                            <p>Where is my order?</p>
                        </div>
                        <div style={{textAlign: 'left', color: 'lightgray'}} class="col col-12 col-md-6 col-lg-3 mb-3">
                            <h4>STYLE ADVISOR</h4>
                            <p>My Account</p>
                            <p>Information</p>
                            <p>Address</p>
                            <p>Discount</p>
                            <p>Orders History</p>
                            <p>Additional Information</p>
                        </div>
                        <div style={{textAlign: 'left', color: 'lightgray'}} class="col col-12 col-md-6 col-lg-3 mb-3">
                            <h4>INFORMATION</h4>
                            <p>Sitemap</p>
                            <p>Search Terms</p>
                            <p>Advanced Search</p>
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Suppliers</p>
                        </div>

                    </div>            
                </div>
                <div className="pb-3" style={{ backgroundColor: '#23292E'}}> 
                    <span style={{color: "lightgray"}}>© 2021 Motoland. All Rights Reserved.</span>
                </div>
                
            </div>
            
    );
};

export default Footer;