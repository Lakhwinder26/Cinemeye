import React from 'react';
import { ImSearch } from 'react-icons/im';
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { FaFootballBall, FaUserAlt } from 'react-icons/fa';
import {MdLocalMovies} from 'react-icons/md';

const Aside = () => {
  return(
    
      <aside className="aside">
        <div className="logo">
          <img src="Pics/logo.png" alt="logo" className="logo__img" />
          <span className="logo__text">Cinemeye</span>
        </div>
        <div className="categories">
          <p>Categories</p>
          <div className="category">
            <AiFillHome className="svg" />
            <p>Main Page</p>
          </div>
          <div className="category">
            <MdLocalMovies className="svg"/>
            <p>Movies</p>
          </div>
          <div className="category">
            <FaFootballBall className="svg" />
            <p>Sports</p>
          </div>
          <div className="category">
            <AiFillStar className="svg"/>
            <p>Favourites</p>
          </div>
          <div className="category">
            <FaUserAlt className="svg"/>
            <p>Personal Data</p>
          </div>
        </div>
        <div className="end-text">Enjoy your favorite movies and TV cahnnels in our application</div>
      </aside>
    
  )
}
export default Aside;