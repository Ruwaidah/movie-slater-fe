import React from 'react'
import MovieList from "./MovieList"

const Dashboard = props => {

    function DatePage(){
        props.history.push('/date')
    }

    return (
        <div>
            <h1>See a movie</h1>
            
            <MovieList />
            
            <div className='black-box'>
                <button className='next-button' onClick={DatePage}>Next</button>
            </div>
        </div>
    )
}

export default Dashboard;