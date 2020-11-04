import React from 'react';
import Header from './header';
import Carousel from './carousel';
import Card from './card';

const Main = () => {
    return(
        <div className="main">
            <Header />
            <Carousel />
            <Card />   
        </div>  
    )
}

export default Main;