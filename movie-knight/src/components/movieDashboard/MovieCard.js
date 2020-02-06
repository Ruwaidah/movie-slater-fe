import React, { useState } from 'react';
import './dashboard.scss';
// import { useHistory } from 'react-router-dom';

export default function MovieCard(props){

  const [active, setActive] = useState(false);

  function toggleClass(){
    const currentState = active;
    setActive(!currentState)
  }

  // function routeChange(){
  //   let path = "/details";
  //   let history = useHistory();
  //   history.push(path);
  // }

  return(
    <div className='movie-card'>
      <div/>
       <img className={active ? 'movie-img red-box' : 'movie-img'} src={props.movie.image} alt={props.movie.title} onClick={toggleClass}/>
       {
         props.movie.title.length > 20 ? <p className='movie-title'>{props.movie.title.slice(0, 17)+ '...'}</p> : <p className='movie-title'>{props.movie.title}</p>
       }
    </div>
    )
}