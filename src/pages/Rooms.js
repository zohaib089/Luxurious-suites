import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
const Rooms = () => {
    return <Hero hero="roomsHero">
        <Banner title="Our Suites">
        <Link to="/" className="btn-primary">
            return to Home
        </Link>
        </Banner>
    </Hero>
}

export default Rooms
