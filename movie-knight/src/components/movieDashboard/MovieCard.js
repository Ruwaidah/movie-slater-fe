import React from 'react';
import './dashboard.css';

export default function MovieCard(props){
  // console.log(props.movie)
  return(
    <div>
      <div className ="img-placeholder"/>
       <img src={props.movie.image} alt={props.movie.title}/>
       <h3>{props.movie.title}</h3>
     
    </div>
    )
}