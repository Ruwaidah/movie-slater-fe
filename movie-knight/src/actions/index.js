import axiosWithAuth from "../utils/axiosWithAuth";


export const USER_LOGING_IN = "USER_LOGING_IN";
export const USER_LOGING_IN_SUCCESS = "USER_LOGING_IN_SUCCESS";
export const USER_LOGING_IN_FAILURE = "USER_LOGING_IN_FAILURE";

export const login = loginData => dispatch => {
    dispatch({ type: USER_LOGING_IN });
  
    axiosWithAuth()
      .post(/*  LOGIN ENDPOINT */ loginData)
      .then(response =>
        dispatch(
          { type: USER_LOGING_IN_SUCCESS, payload: response.data.user },
          localStorage.setItem("token", response.data.token),
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
      .post(/*  SINGING ENDPOINT  */signUpData)
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

export const THEATER_USER_LOGING_IN = "THEATER_USER_LOGING_IN";
export const THEATER_USER_LOGING_IN_SUCCESS = "THEATER_USER_LOGING_IN_SUCCESS";
export const THEATER_USER_LOGING_IN_FAILURE = "THEATER_USER_LOGING_IN_FAILURE";

export const theaterLogin = loginData => dispatch => {
    dispatch({ type:  THEATER_USER_LOGING_IN });
  
    axiosWithAuth()
      .post(/*  LOGIN ENDPOINT */ loginData)
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
      .post(/*  SINGING ENDPOINT  */signUpData)
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