import React from 'react';
import Item from './items';
import CSel from './data';
import { BiPlayCircle } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

const Carousel = () => {
    return(
        <section id="myCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="item active">
                        <img src="Pics/interstellar.jpg" />
                        <div class="caption">
                            <h5>Action | Drama | Adventure | Space</h5>
                            <h3>INTERSTELLAR</h3>
                            <div className="play">
                            <p><BiPlayCircle /> Watch later</p>
                            <p><AiFillStar id="fill"/> Add to Favourites</p>
                            </div>
                            <p>A team of explorers travel beyond the galaxy through a newly discovered wormhole to discover whether mankind has a future among the stars</p>
                        </div>
                    </div>
                    
                    <Item image={CSel[0].image} title={CSel[0].title} desc={CSel[0].desc} />

                    <Item image={CSel[1].image} title={CSel[1].title} desc={CSel[1].desc} />

                </div>

   
                <a class="left" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </section>
    )
}

export default Carousel;