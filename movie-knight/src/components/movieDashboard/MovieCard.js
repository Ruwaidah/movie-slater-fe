import React from 'react';
import './dashboard.scss';

export default function MovieCard(props){
  // console.log(props.movie)
  return(
    <div>
      <div/>
       <img src={props.movie.image} alt={props.movie.title}/>
       <h3>{props.movie.title}</h3>
    </div>
    )
}