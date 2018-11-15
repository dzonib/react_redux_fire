import {CREATE_PROJECT} from '../types/projectTypes'

export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // pause dispatch,
        // make async call to db
        dispatch({
            type: CREATE_PROJECT,
            project
        })
    }
}