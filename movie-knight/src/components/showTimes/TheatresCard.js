import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './showtime.scss'
import axio from 'axios'
import Loading from '../Loading.js'

const TheatresCard = props => {
    // console.log(props.getTheater.location)
    return (
        <div className={props.ind > 0 ? "black-bg theatre" : 'theatre'}>
            <h2 className='theatre-name'>{props.show.theatre}</h2>
            {/* <p>{`${address.street}, ${address.city}, ${address.state}, ${address.postalcode}`}</p> */}
        </div>
    )


}
const mapStateToProps = state => {
    return {
        fetchingData: state.fetchingData,
        MovieSelects: state.MovieSelects,
        daySelects: state.daySelects,
        ticketsNumber: state.ticketsNumber,
        seatsSelects: state.seatsSelects,
        timeSelects: state.timeSelects,
        results: state.results
    };
};

export default connect(mapStateToProps)(TheatresCard);