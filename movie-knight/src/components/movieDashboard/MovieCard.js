import React from 'react'

export default function MovieCard(props){
  console.log(props.movie.title)
  return(
    <div>
      <div className ="img-placeholder"/>
      <h3>{props.movie.title}</h3>
    </div>
    )
}