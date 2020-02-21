import React, {useState} from 'react'
import { connect } from 'react-redux'
import './showtime.scss'

const Showtime = props =>{

    console.log(props.MovieSelects)


    return(
        <div>
            <h3 className='text'>Your matches</h3>
                {
                    props.MovieSelects.map(movie =>(
                        <div key={movie.tmsId}>
                            <img src={movie.image} alt={movie.title}/>
                            <h2>{movie.title}</h2>
                            <h4>Rated {movie.ratings[0].code}</h4>
                            {
                                movie.showtimes.map((showtime, i) =>(
                                    <div key={i}>
                                        <h3>{showtime.theatre.name}</h3>
                                        <a href={showtime.ticketURI}>{showtime.dateTime}</a>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        MovieSelects: state.MovieSelects
    };
};


export default connect(mapStateToProps)(Showtime);