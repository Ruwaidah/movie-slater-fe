import { login } from '../actions/index.js'
import reducer from '../reducers/index.js'
import Item from 'antd/lib/list/Item'
import expectExport from 'expect'

const error = {
    message: "error in server"
}
describe("Reducer", () => {
    it("Should return default", () => {

        const state = {
            userData: {},
            fetchingData: false,
            error: "",
        };
        const user = {
            email: "ruwaidah@test.com",
            password: "12345"
        }
        const newState = reducer(state, { type: undefined, payload: user })
        expectExport(newState).toEqual({ ...state })
    })

    // USER_LOGING
    it("USER_LOGING_IN", () => {
        const state = {
            userData: {},
            fetchingData: false,
            error: "",
        }
        const user = {
            username: "ruwaidah@test.com",
            password: "12345"
        }
        let newState = reducer(state, { type: "USER_LOGING_IN" })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: true
        })
        newState = reducer(state, { type: "USER_LOGING_IN_SUCCESS", payload: user })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: false,
            userData: user
        })
        newState = reducer(state, { type: "USER_LOGING_IN_FAILURE", payload: error })
        expectExport(newState).toEqual({
            ...state,
            error: error,
            fetchingData: false
        })
    })

    //GOOGLE SIGN UP/
    it("USER_SIGNING_GOOGLE", () => {
        const state = {
            userData: {},
            fetchingData: false,
            error: "",
        };
        const user = {
            data: {
                user: {
                    name: "error in server",
                    email: "",
                    googleId: ""
                }
            }
        }
        let newState = reducer(state, { type: "USER_SIGNING_GOOGLE" })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: true,
            userData: {},
        })
        newState = reducer(state, { type: "USER_SIGNING_GOOGLE_SUCCESS", payload: user })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: false,
            userData: user.data.user
        })
        newState = reducer(state, { type: "USER_SIGNING_GOOGLE_FAILURE", payload: error })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: false,
            error: error
        })
    })


    //*************************USER SIGN-UP */
    it("USER_SIGNING", () => {
        const state = {
            userData: {},
            fetchingData: false,
            error: "",
        };
        const user = {
            data: {
                user: {
                    name: "error in server",
                    email: "",
                    googleId: ""
                }
            }
        }
        let newState = reducer(state, { type: "USER_SIGNING" })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: true
        })
        newState = reducer(state, { type: "USER_SIGNING_SUCCESS", payload: user })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: false,
            userData: user
        })
        newState = reducer(state, { type: "USER_SIGNING_FAILURE", payload: error })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: false,
            error: error
        })
    })



    //********************** GET MOVIE DETAILS */
    it("GET_MOVIE_DETAIL_START", () => {
        const state = {
            fetchingData: false,
            error: "",
            movieDetails: []
        };
        const movieDetails = []
        let newState = reducer(state, { type: "GET_MOVIE_DETAIL_START" })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: true
        })

        newState = reducer(state, { type: "GET_MOVIE_DETAIL_SUCCESS", payload: movieDetails })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: false,
            movieDetails: movieDetails
        })
        newState = reducer(state, { type: "GET_MOVIE_DETAIL_FAILURE", payload: error })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: false,
            error: error
        })
    })




    //**************************** GET UPCOMING MOVIES */

    it("GET_MOVIES_UPCOMING_START", () => {
        const state = {
            fetchingData: false,
            error: "",
            upcomingMovies: []
        };
        const upcomingMovies = []
        let newState = reducer(state, { type: "GET_MOVIES_UPCOMING_START" })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: true
        })

        newState = reducer(state, { type: "GET_MOVIES_UPCOMING_SUCCESS", payload: upcomingMovies })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: false,
            upcomingMovies: upcomingMovies
        })
        newState = reducer(state, { type: "GET_MOVIES_UPCOMING_FAILURE", payload: error })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: false,
            error: error
        })

    })
    // ************************************** Get User By ID
    it("USER_BY_ID", () => {
        const state = {
            fetchingData: true,
            error: "",
            userInfo: []
        };
        let newState = reducer(state, { type: "USER_BYID_LOADING" })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: true,
        })
        newState = reducer(state, { type: "USER_BYID_SUCCESS", payload: [] })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: false,
            userInfo: []
        })

        newState = reducer(state, { type: "USER_BYID_FAILURE", payload: error })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: false,
            error: error
        })
    })



    //  ******************************************** Get Results
    it("GET_SHOWTIMES_RESULTS_LOADING", () => {

        const state = {
            results: {},
            theatres: [],
            fetchingData: false,
            error: "",
        }

        const data = [{}, {}]

        let newState = reducer(state, { type: "GET_SHOWTIMES_RESULTS_LOADING" })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: true,
        })
        newState = reducer(state, { type: "GET_SHOWTIMES_RESULTS_SUCCESS", payload: data })
        expectExport(newState).toEqual({
            ...state,
            fetchingData: false,
            results: data[0],
            theatres: data[1]
        })

        newState = reducer(state, { type: "GET_SHOWTIMES_RESULTS_FAILED", payload: error })
        expectExport(newState).toEqual({
            ...state,
            error: error,
            fetchingData: false
        })
    })


    // ******************************** Next Buttons

    it("TOGGLE_NEXT_BUTTON", () => {
        let state = {
            NextButton: false
        };
        let newState = reducer(state, { type: "TOGGLE_NEXT_BUTTON" })
        expectExport(newState).toEqual({
            ...state,
            NextButton: true
        })
        state = {
            NextButton: true
        };
        newState = reducer(state, { type: "TOGGLE_NEXT_OFF" })
        expectExport(newState).toEqual({
            ...state,
            NextButton: false
        })
    })

    // *********************************** Movies Selected

    it("MOVIE_NEXT_BUTTON", () => {
        const state = {
            MovieSelects: [],
            daySelects: [],
            ticketsNumber: [],
            seatsSelects: []
        };
        const MovieSelects = []
        let newState = reducer(state, { type: "MOVIE_NEXT_BUTTON", payload: MovieSelects })
        expectExport(newState).toEqual({
            ...state,
            MovieSelects: MovieSelects
        })
        newState = reducer(state, { type: "DAY_NEXT_BUTTON", payload: [] })
        expectExport(newState).toEqual({
            ...state,
            daySelects: []
        })

        newState = reducer(state, { type: "TICKETS_NEXT_BUTTON", payload: [] })
        expectExport(newState).toEqual({
            ...state,
            ticketsNumber: []
        })
        newState = reducer(state, { type: "SEATS_NEXT_BUTTON", payload: [] })
        expectExport(newState).toEqual({
            ...state,
            seatsSelects: []
        })
    })



    // ****************************** TIME SELECT
    it("TIME_NEXT_BUTTON", () => {
        const state = {
            timeSelects: []
        };
        const timeSelects = []
        const newState = reducer(state, { type: "TIME_NEXT_BUTTON", payload: timeSelects })
        expectExport(newState).toEqual({
            ...state,
            timeSelects: timeSelects
        })
    })

})