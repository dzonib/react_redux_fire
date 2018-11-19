import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../types/projectTypes'

export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore()

		firestore
			.collection('projects')
			.add({
				...project,
				authorFirstName: 'King',
                authorLastName: 'Kong',
                authorId: '12354',
				createdAt: new Date()
			})
			.then(() => {
				dispatch({
					type: CREATE_PROJECT,
					project
				})
			})
			.catch((err) => {
				dispatch({ type: CREATE_PROJECT_ERROR, err })
			})
	}
}
