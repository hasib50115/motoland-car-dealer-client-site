import React from 'react';
import ReviewPage from '../../ReviewPage/ReviewPage';
import Blogs from '../Blogs/Blogs';
import Carousel from '../Carousel/Carousel';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';

const HomePage = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Carousel></Carousel>
            <Services></Services>
            <Blogs></Blogs>
            <ReviewPage></ReviewPage>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;