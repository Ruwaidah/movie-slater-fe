import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './showtime.scss'
import axio from 'axios'
import Loading from '../Loading.js'



const TimesCard = props => {
    const [isSelect, setIsSelect] = useState({
        clicked: false,
        time: ""

    })

    useEffect(() => {
        setIsSelect(false)
    }, [props.active])

    const picked = (data) => {
        props.setActive(!props.active)
        setTimeout(() => {
            setIsSelect({
                [isSelect.time]: data,
                clicked: !isSelect.clicked
            })
        }, [])
    }

    return (
        <>
            <p className={props.ind > 0 ? isSelect.clicked ? `bright-red timeshow white-text` : `timeshow white-text` : isSelect.clicked ? `bright-red timeshow` : `timeshow`} onClick={() => picked(props.time + props.date)}>{props.time}</p>
            {isSelect.clicked ? <button className="next-button" id="tickets-btn" onClick={() => props.history.push("/signup")}>Get tickets</button> : null}
        </>
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