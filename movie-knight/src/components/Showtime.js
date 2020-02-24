import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './showtime.scss'
import axio from 'axios'



const Showtime = props => {
    const [filtering, setFiltering] = useState([])
    console.log(props.MovieSelects)
    console.log(props.daySelects);
    console.log(props.timeSelects)
    let moviesIds = props.MovieSelects.map(movie => movie.tmsId)


    return (
        <div className='showtime-card'>
            <h3 className='text'>Your matches</h3>
            {
                props.MovieSelects.map(movie => (
                    <div key={movie.tmsId}>
                        <div className='movie-info'>
                            <img className='poster' src={movie.image} alt={movie.title} />
                            <div className='movie-text'>
                                <h2 className='title'>{movie.title}</h2>
                                <h4 className='runtime'>{runTime(movie.runTime)}</h4>
                                <h4 className='rated'>Rated {movie.ratings[0].code}</h4>
                            </div>
                        </div>
                        <div className='theatre'>
                            <h2 className='theatre-name'>{movie.showtimes[0].theatre.name}</h2>
                        </div>
                        <div className='theatre-showtime'>
                            <h5 className='sub-text'>Standard format</h5>
                            {
                                props.daySelects.map((days, i) => (
                                    <div key={i}>
                                        <h4 className='days-text'>{`${days[1]}  ${days[0].substring(1, 5)}`}</h4>
                                    </div>
                                ))
                            }
                            <h5 className='back-home' onClick={() => props.history.push('/')}>Want to see a different movie?</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        MovieSelects: state.MovieSelects,
        daySelects: state.daySelects,
        ticketsNumber: state.ticketsNumber,
        seatsSelects: state.seatsSelects,
        timeSelects: state.timeSelects
    };
};

function runTime(str) {
    let num = str.replace(/\D+/g, "")
    let hours = num.substring(1, 2)
    let min = num.substring(2, 4)
    return `${hours}h ${min}m`
}


export default connect(mapStateToProps)(Showtime);