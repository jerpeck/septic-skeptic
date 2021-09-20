import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

export default function BasicPage(props) {
    const { contentPage, socialMedia } = props;
    console.log('from BasicPage: ', props);
    return(
        <div>
            <Nav contentPage={contentPage} />
                {props.children}
            <Footer socialMedia={socialMedia} />
        </div>
    )
}