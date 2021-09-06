import React from 'react';
import ContentPage from './ContentPage';

export default function About(props) {
    const { title, description, } = props;
    return(
        <ContentPage title={title} description={description} />
    )
}