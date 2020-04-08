import { REQUEST_USER } from './Types'



export function getUsers(){

    return{
        type: REQUEST_USER
    }

    // return async dispatch => {
    //     const response = await fetch('https://api.github.com/users?since=135')
    //     const json = await response.json()
    //     dispatch({ type: GET_USER, payload: json})
    // }
}