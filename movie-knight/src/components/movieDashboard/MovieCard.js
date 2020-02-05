import React, { useState } from 'react';
import './dashboard.scss';

export default function MovieCard(props){

  const [active, setActive] = useState(false);

  function toggleClass(){
    const currentState = active;
    setActive(!currentState)
  }

  return(
    <div className='movie-card'>
      <div/>
       <img className={active ? 'movie-img red-box' : 'movie-img'} src={props.movie.image} alt={props.movie.title} onClick={toggleClass}/>
       {/* <p className='movie-title'>{props.movie.title}</p> */}
    </div>
    )
}