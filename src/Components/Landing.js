import React from 'react';
import BasicPage from './BasicPage';
import Hero from './Hero';
import Portfolio from './Portfolio';

export default function Landing(props) {
    const { data } = props;
    const socialMedia = data.socialMedia;

    return(
        <BasicPage socialMedia={socialMedia} >            
            <Hero hero={data.hero} />
            <Portfolio works={data.works} />
        </BasicPage>
    )
}