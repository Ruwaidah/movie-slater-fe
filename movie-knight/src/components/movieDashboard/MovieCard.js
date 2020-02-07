import React, { useState } from 'react';
import './dashboard.scss';
import { withRouter } from 'react-router-dom'

function MovieCard(props){

  const [active, setActive] = useState(false);

  function toggleClass(){
    const currentState = active;
    setActive(!currentState)
  }

  return(
    <div className='movie-card'>
      <div/>
       <img className={active ? 'movie-img-enable movie-title-enable red-box' : 'movie-img-disable movie-title-disable'} src={props.movie.image} alt={props.movie.title} onClick={toggleClass}/>
       {
         props.movie.title.length > 20 ? <p onClick={() => props.history.push(`/details/${props.movie.title}`)} className={active ? 'movie-title-enable' : 'movie-title-disable'}>{props.movie.title.slice(0, 17)+ '...'}</p> : <p  onClick={() => props.history.push(`/details/${props.movie.title}`)} className={active ? 'movie-title-enable' : 'movie-title-disable'>{props.movie.title}</p>
       }
    </div>
    )
}

export default withRouter(MovieCard)