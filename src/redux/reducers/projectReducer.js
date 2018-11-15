import { CREATE_PROJECT } from "../types/projectTypes";

const initialState = {
	projects: []
}

const projectReducer = (state = initialState, action) => {
	switch (action.type) {
        case CREATE_PROJECT:
            return {...state, projects: [...state.projects, action.project]}
		default:
			return state
	}
}

export default projectReducer
