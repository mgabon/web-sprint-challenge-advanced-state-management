import axios from 'axios';

export const ADD_SMURF = "ADD_SMURF"
export const ERROR_MESSAGE = "ERROR_MESSAGE"
export const FETCH_SMURF = "FETCH_SMURF"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAIL = "FETCH_FAIL"

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({type:FETCH_SMURF});
        axios.get('http://localhost:3333/smurfs')
        .then(resp => {
            //console.log(resp.data)
            dispatch({type:FETCH_SUCCESS, data:resp.data})
        })
        .catch(err => {
            dispatch({type:FETCH_FAIL, data:err})
        })
    }
}

export const addSmurf = (smurfs) => {
    return({type:ADD_SMURF, data:smurfs});
}

export const fetchFail = (errorMessage) => {
    return({type:ERROR_MESSAGE, data: errorMessage});
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.