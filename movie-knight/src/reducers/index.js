import {
  USER_SIGNING_GOOGLE,
  USER_SIGNING_GOOGLE_SUCCESS,
  USER_SIGNING_GOOGLE_FAILURE,
  USER_LOGING_IN,
  USER_LOGING_IN_SUCCESS,
  USER_LOGING_IN_FAILURE,
  USER_SIGNING,
  USER_SIGNING_SUCCESS,
  USER_SIGNING_FAILURE,
  THEATER_USER_LOGING_IN,
  THEATER_USER_LOGING_IN_SUCCESS,
  THEATER_USER_LOGING_IN_FAILURE,
  THEATER_USER_SIGNING,
  THEATER_USER_SIGNING_SUCCESS,
  THEATER_USER_SIGNING_FAILURE,
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIE_DETAIL_START,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILURE,
  GET_MOVIES_UPCOMING_START,
  GET_MOVIES_UPCOMING_SUCCESS,
  GET_MOVIES_UPCOMING_FAILURE,
  TOGGLE_NEXT_BUTTON
} from "../actions/index";

const initialState = {
  movieList: [],
  userData: {},
  fetchingData: false,
  error: "",
  googleData: {},
  NextButton: false,
  movieDetails: {},
  upcomingMovies: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //GOOGLE SIGN UP/
    case USER_SIGNING_GOOGLE:
      return {
        ...state,
        fetchingData: true,
        googleData: action.payload
      };

    case USER_SIGNING_GOOGLE_SUCCESS:
      localStorage.setItem("google_username", action.payload.data.user.name);
      return {
        ...state,
        fetchingData: false,
        googleData: action.payload
      };

    case USER_SIGNING_GOOGLE_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    //*************************USER LOGIN */
    case USER_LOGING_IN:
      return {
        ...state,
        fetchingData: true
      };

    case USER_LOGING_IN_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        userData: action.payload
      };

    case USER_LOGING_IN_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    //*************************USER SIGN-UP */
    case USER_SIGNING:
      return {
        ...state,
        fetchingData: true
      };

    case USER_SIGNING_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        userData: action.payload
      };

    case USER_SIGNING_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    //*************************THEATER SIGN-UP */
    case THEATER_USER_SIGNING:
      return {
        ...state,
        fetchingData: true
      };

    case THEATER_USER_SIGNING_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        userData: action.payload
      };

    case THEATER_USER_SIGNING_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    //*************************THEATER LOGIN */
    case THEATER_USER_LOGING_IN:
      return {
        ...state,
        fetchingData: true
      };

    case THEATER_USER_LOGING_IN_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        userData: action.payload
      };

    case THEATER_USER_LOGING_IN_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    //*************************** GET MOVIES//
    case GET_MOVIES_START:
      return {
        ...state,
        fetchingData: true
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        movieList: action.payload
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    //********************** GET MOVIE DETAILS */
    case GET_MOVIE_DETAIL_START:
      return {
        ...state,
        fetchingData: true
      };

    case GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        movieDetails: action.payload
      };

    case GET_MOVIE_DETAIL_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    //**************************** GET UPCOMING MOVIES */
    case GET_MOVIES_UPCOMING_START:
      return {
        ...state,
        fetchingData: true
      };

    case GET_MOVIES_UPCOMING_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        fetchingData: false,
        upcomingMovies: action.payload
      };

    case GET_MOVIES_UPCOMING_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    case TOGGLE_NEXT_BUTTON:
      return {
        ...state,
        NextButton: !state.NextButton
      }

    default:
      return state;
  }
};

export default reducer;
