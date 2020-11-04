import React from 'react';
import { BiPlayCircle } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

const Item = (props) => {
    return(
        <div class="item">
            <img src={props.image} />
            <div class="caption">
                <h3>{props.title}</h3>
                <div className="play">
                <p><BiPlayCircle /> Watch later</p>
                <p><AiFillStar /> Add to Favourites</p>
                </div>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Item;