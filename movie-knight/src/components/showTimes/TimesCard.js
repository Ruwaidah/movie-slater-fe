import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './showtime.scss'
import axio from 'axios'
import Loading from '../Loading.js'



const TimesCard = props => {
    console.log(props.num)
    const [isSelect, setIsSelect] = useState(false)


    const picked = () => {
        props.setActive(!props.active)
        setIsSelect(!isSelect)
    }

    return (
        <p value={props.time} className={props.ind > 0 ? isSelect ? `bright-red timeshow white-text` : `timeshow white-text` : isSelect ? `bright-red timeshow` : `timeshow`} onClick={picked}>{props.time}</p>
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
        results: state.results,
    };
};

export default connect(mapStateToProps)(TimesCard);