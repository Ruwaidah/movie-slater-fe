import React from 'react';
import './dashboard.scss';

export default function MovieCard(props){
  // console.log(props.movie)
  return(
    <div className='movie-card'>
      <div/>
       <img className='movie-img' src={props.movie.image} alt={props.movie.title}/>
       <p className='movie-title'>{props.movie.title}</p>
    </div>
    )
}