import React from 'react'
import MovieList from "./MovieList"

const Dashboard = props => {
    return (
        <div>
            <h1>See a movie</h1>
            
            <MovieList />
            <div className='black-box'>
                <button className='next-button'>Next</button>
            </div>
        </div>
    )
}

export default Dashboard;