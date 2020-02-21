import React, {useState} from 'react'
import { connect } from 'react-redux'
import './showtime.scss'

const Showtime = props =>{

    console.log(props.MovieSelects)

    function runTime(str){
        let num = str.replace(/\D+/g, "")
        let hours = num.substring(1,2)
        let min = num.substring(2,4)
        return `${hours}h ${min}m`
    }

    function movieTheartres(arr){
        let theatres = []

        
    }



    return(
        <div className='showtime-card'>
            <h3 className='text'>Your matches</h3>
                {
                    props.MovieSelects.map(movie =>(
                        <div key={movie.tmsId}>
                            <div className='movie-info'>
                                <img className='poster' src={movie.image} alt={movie.title}/>
                                <div className='movie-text'>
                                    <h2 className='title'>{movie.title}</h2>
                                    <h4 className='runtime'>{runTime(movie.runTime)}</h4>
                                    <h4 className='rated'>Rated {movie.ratings[0].code}</h4>
                                </div>
                            </div>
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