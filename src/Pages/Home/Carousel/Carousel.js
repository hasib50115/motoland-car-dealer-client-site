import React from 'react';
import './Carousel.css';

const Carousel = () => {
    return (
        <section class="container py-5" style={{marginTop: '100px', backgroundColor: 'rgba(0,255,255,0.1)'}}>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="5000">
                  <div class="row panda-bg-info bg-gradient d-flex align-items-center">
                      <div style={{textAlign: 'left'}} class="col-lg-7 p-5">
                          <h1>Toyota Harrier</h1>
                          <p>Discover new heights of driving luxury with a sleek, elegant exterior and an innovative, refined interior. Toyota Safety Sense offered as standard, the new Harrier is an experience that’s truly a cut above the rest.</p>
                          <h1>$75000</h1>
                          <button class="panda-btn-buy-now btn-warning"><h6>Buy Now</h6></button>
                      </div>
                      <div class="col-lg-5">
                        <img src="https://www.fixmycar.pk/wp-content/uploads/2020/08/Honda-Vezel-Parts.png" class="d-block w-100" alt="..."/>
                      </div>
                  </div>                    
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                  <div class="row panda-bg-info bg-gradient d-flex align-items-center">
                      <div style={{textAlign: 'left'}} class="col-lg-7 p-5">
                          <h1>Kia Sportage</h1>
                          <p>Sportage is the new benchmark medium SUV – visionary technology, distinctive design language, avant-garde space, and a powerful driving experience in one.</p>
                          <h1>$21300</h1>
                          <button class="panda-btn-buy-now btn-warning"><h6>Buy Now</h6></button>
                      </div>
                      <div class="col-lg-5">
                        <img src="https://i.pinimg.com/originals/ee/d7/c7/eed7c7c77d98b23d35346e689c8fb6d7.jpg" class="d-block w-100" alt="..."/>
                      </div>
                  </div>                    
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                  <div class="row panda-bg-info bg-gradient d-flex align-items-center">
                      <div style={{textAlign: 'left'}} class="col-lg-7 p-5">
                          <h1>Honda Vezel</h1>
                          <p>The VEZEL HYBRID is the first among all Honda hybrid models to be equipped with Honda's original Real Time AWD, which controls torque distribution to the front and rear wheels precisely through electronic control.</p>
                          <h1>$29800</h1>
                          <button class="panda-btn-buy-now btn-warning"><h6>Buy Now</h6></button>
                      </div>
                      <div class="col-lg-5">
                        <img src="https://www.hdcarwallpapers.com/walls/honda_vezel_ehev_2021_5k_2-HD.jpg" class="d-block w-100" alt="..."/>
                      </div>
                  </div>                    
              </div>
             
             
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span style={{color: 'gray'}} class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>   
      </section>
    );
};

export default Carousel;