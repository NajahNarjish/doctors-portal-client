import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeaturedService from '../FeaturedService/FeaturedService';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonials from '../Testimonials/Testimonials';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services />
            <FeaturedService/>
            <MakeAppointment/>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;