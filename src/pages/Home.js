import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import Services from '../components/Services';


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
    </>
    )
}

export default Home
