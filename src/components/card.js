import React from 'react';
import { Coll, CNew } from './data';

const Prop = (props) => {
    return(
        <div class="card">
        <img src={props.image} alt={props.alt}/>
        <div className="card__info">
            <h5>{props.title}</h5>
            <p>{props.genre}</p>
            <p>{props.desc}</p>
            </div>
        </div>
    )
};

function Collection(cVal) {
    return(
        <Prop title={cVal.title} image={cVal.image} desc={cVal.desc} />
    )
};

function New(cVal) {
    return(
        <Prop title={cVal.title} image={cVal.image} genre={cVal.genre} />   
    )
};

const Card = () => {
    return(
        <section className="movieColl">
            <div className="info">
                <h5>Movie Collections</h5>
                <button>All Collections</button>
            </div>

            <div className="cards">
                {Coll.map(Collection)}
            </div>

            <div className="info">
                <h5>New</h5>
            </div>

            <div className="cards">
                {CNew.map(New)}
            </div>
        </section>
    )
}

export default Card;