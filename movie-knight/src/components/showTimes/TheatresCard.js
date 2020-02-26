import React from 'react'
import { connect } from 'react-redux'
import './showtime.scss'
import { getfavoriteTheatres } from '../../actions/index.js'


const TheatresCard = props => {
    // console.log(props.getTheater.location)
    const theatre = props.theatres.filter(thea => thea.theatreId == props.show.id)
    console.log(theatre)
    const addToFavorite = () => {
        console.log(theatre)
        props.getfavoriteTheatres(theatre)
    }


    return (
        <div className={props.ind > 0 ? "black-bg theatre" : 'theatre'}>
            <h2 className='theatre-name'>{props.show.theatre}</h2>
            <div>
                <p>{`${theatre[0].location.address.street}, ${theatre[0].location.address.city}, ${theatre[0].location.address.state}, ${theatre[0].location.address.postalCode}`}</p>
                {localStorage.getItem("googleId") ? <button onClick={() => addToFavorite()}>Add</button> :
                    localStorage.getItem("userId") ? <button onClick={() => addToFavorite()}>Add</button> : null
                }

            </div>
        </div>
    )


}
const mapStateToProps = state => {
    return {
        fetchingData: state.fetchingData,
        theatres: state.theatres,
        userData: state.userData
    };
};

export default connect(mapStateToProps, { getfavoriteTheatres })(TheatresCard);