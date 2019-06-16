import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';


const Home = () => {
    return (
    <>
    <Hero>
        <Banner title="Gorgeous rooms" subtitle="Super suites will start from 350€">
        <Link to="/rooms" className="btn-primary">
            Our Suites
        </Link>
        </Banner>
    </Hero>
    <Services/>
    <FeaturedRoom/>
    </>
    )
}

export default Home
