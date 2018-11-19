import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../types/projectTypes";

const initialState = {
	projects: []
}

const projectReducer = (state = initialState, action) => {
	switch (action.type) {
        case CREATE_PROJECT:
			return {...state, projects: [...state.projects, action.project]}
		case CREATE_PROJECT_ERROR:
			console.log(`Create project error --> ${action.err}`)
			return state	
		default:
			return state
	}
}

export default projectReducer
