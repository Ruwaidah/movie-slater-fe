import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import axiosWithGoogle from "../utils/axiosWithGoogle";

import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

export const USER_LOGING_IN = "USER_LOGING_IN";
export const USER_LOGING_IN_SUCCESS = "USER_LOGING_IN_SUCCESS";
export const USER_LOGING_IN_FAILURE = "USER_LOGING_IN_FAILURE";

export const login = loginData => dispatch => {
    dispatch({ type: USER_LOGING_IN });
  
    axiosWithAuth()
      .post('/api/auth/login', loginData)
      .then(response =>
        dispatch(
          { type: USER_LOGING_IN_SUCCESS, payload: response.data },
          localStorage.setItem("token", response.data.token)
        )
      )
      .catch(err =>
        dispatch({ type: USER_LOGING_IN_FAILURE, payload: err.response })
      );
};

export const USER_SIGNING = "USER_SIGNING";
export const USER_SIGNING_SUCCESS = "USER_SIGNING_SUCCESS";
export const USER_SIGNING_FAILURE = "USER_SIGNING_FAILURE";

export const signUp = signUpData => dispatch => {
    dispatch({ type: USER_SIGNING });
  
    axiosWithAuth()
      .post('/api/auth/register ', signUpData)
      .then(response =>
        dispatch(
          { type: USER_SIGNING_SUCCESS, payload: response.data.user },
          localStorage.setItem("token", response.data.token)
        )
      )
      .catch(err =>
        dispatch({ type: USER_SIGNING_FAILURE, payload: err.response })
      );
};

//GOOGLE_LOGIN
export const USER_SIGNING_GOOGLE = "USER_SIGNING_GOOGLE";
export const USER_SIGNING_GOOGLE_SUCCESS = "USER_SIGNING_GOOGLE_SUCCESS";
export const USER_SIGNING_GOOGLE_FAILURE = "USER_SIGNING_GOOGLE_FAILURE";

export const signUpGoogle = signUpData => dispatch => {
  dispatch({ type: USER_SIGNING_GOOGLE });

  axiosWithGoogle()
    //.post('https://movieknight01.herokuapp.com/api/oauth/login', signUpData)
    .get('https://movieknight01.herokuapp.com/api/oauth/login')
    .then(response =>
      dispatch(
        { type: USER_SIGNING_GOOGLE_SUCCESS, payload: response },
      )
    )
    .catch(err =>
      dispatch({ type: USER_SIGNING_GOOGLE_FAILURE, payload: err.response })
    );
};

export const THEATER_USER_LOGING_IN = "THEATER_USER_LOGING_IN";
export const THEATER_USER_LOGING_IN_SUCCESS = "THEATER_USER_LOGING_IN_SUCCESS";
export const THEATER_USER_LOGING_IN_FAILURE = "THEATER_USER_LOGING_IN_FAILURE";

export const theaterLogin = loginData => dispatch => {
    dispatch({ type:  THEATER_USER_LOGING_IN });
  
    axiosWithAuth()
      .post('/api/auth/owner/login', loginData)
      .then(response =>
        dispatch(
          { type: THEATER_USER_LOGING_IN_SUCCESS, payload: response.data.user },
          localStorage.setItem("token", response.data.token),
        )
      )
      .catch(err =>
        dispatch({ type:THEATER_USER_LOGING_IN_FAILURE, payload: err.response })
      );
};

export const THEATER_USER_SIGNING = "THEATER_USER_SIGNING";
export const THEATER_USER_SIGNING_SUCCESS = "THEATER_USER_SIGNING_SUCCESS";
export const THEATER_USER_SIGNING_FAILURE = "THEATER_USER_SIGNING_FAILURE";

export const TheaterSignUp = signUpData => dispatch => {
    dispatch({ type: THEATER_USER_SIGNING });
  
    axiosWithAuth()
      .post('/api/auth/owner/register', signUpData)
      .then(response =>
        dispatch(
          { type: THEATER_USER_SIGNING_SUCCESS, payload: response.data.user },
          localStorage.setItem("token", response.data.token)
        )
      )
      .catch(err =>
        dispatch({ type: THEATER_USER_SIGNING_FAILURE, payload: err.response })
      );
};

//GET MOVIES WIHTOUT LOGIN//
export const GET_MOVIES_START = "GET_MOVIES_START";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";

export const getMovie = (zipcode) => dispatch => {
  dispatch({ type: GET_MOVIES_START });

  axios
    .get(`https://movieknight01.herokuapp.com/api/movies?zip=${zipcode}`)
    .then(response =>
      dispatch(
        { type: GET_MOVIES_SUCCESS, payload: response.data }
      )
    )
    .catch(err =>
        dispatch({ type: GET_MOVIES_FAILURE, payload: err.response })
      )
}
