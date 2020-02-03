import React from 'react';
import './dashboard.css';

export default function MovieCard(props){
  console.log(props.movie.title)
  return(
    <div>
      <div className ="img-placeholder"/>
      <h3>{props.movie.title}</h3>
    </div>
    )
}