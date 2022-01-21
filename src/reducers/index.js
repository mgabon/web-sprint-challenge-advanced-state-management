import { FETCH_SMURF, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, ERROR_MESSAGE } from "../actions";

export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action)=> {
    //console.log("this is", action)
    switch(action.type){
        case FETCH_SMURF:
            return {
                ...state,
                smurfs: [],
                isFetching: true,
                error: ''
            };
        case FETCH_FAIL:
            return{
                ...state,
                smurfs: [],
                isFetching: false,
                error: action.data
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: [...action.data],
                isFetching: false,
                error: ''
            };
        case ADD_SMURF:
            return{
                ...state,
                smurfs: [
                ...state.smurfs,
            {
                name: action.data.name,
                nickname: action.data.nickname,
                position: action.data.position,
             description: action.data.description,
             id: action.data.id
            }],
            isFetching: false,
            error: ''
            };
        case ERROR_MESSAGE:
            return{
                ...state,
                smurfs: [],
                error: action.data
            }         
            default:
                return state        
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.