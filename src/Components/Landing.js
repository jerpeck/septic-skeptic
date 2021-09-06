import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Nav from './Nav';
import Portfolio from './Portfolio';

export default function Landing(props) {
    const { hero, } = props;

    return(
        <div>
            <Nav />
            {<Hero hero={hero} />}
            <Portfolio />
            <Footer />
        </div>
    )
}