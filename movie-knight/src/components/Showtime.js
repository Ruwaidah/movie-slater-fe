import React, {useState} from 'react'
import { connect } from 'react-redux'
import './showtime.scss'

const Showtime = props =>{

    console.log(props.MovieSelects)


    return(
        <div>
            <h3 className='text'>Your matches</h3>
            <div>
                {
                    props.MovieSelects.map(movie =>(
                    <h6>{movie}</h6>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        MovieSelects: state.MovieSelects
    };
};


export default connect(mapStateToProps)(Showtime);