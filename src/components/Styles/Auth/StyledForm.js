import styled from 'styled-components'

const StyledForm = styled.form`
	font-size: 2rem;
	text-align: center;
	width: 800px;
	border: 5px solid white;
	padding: 2rem 2rem;
	line-height: 1.5;
	box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
	background: rgba(0, 0, 0, 0.02);
	h1 {
		font-weight: bold;
		font-size: 6rem;
	}
	margin: 0 auto;
	input {
		font-size: 90%;
		height: 30px;
		width: 100%;
		outline-color: ${(props) => props.theme.black};
		&:focus {
			outline: ${(props) => props.theme.red};
		}
	}
	label {
		display: flex;
		margin-top: 1.5rem;
		color: #9e9e9e;
	}
	button {
		margin-top: 40px;
		width: auto;
		background: red;
		color: white;
		border: 0;
		font-size: 2rem;
		font-weight: 600;
		padding: 0.5rem 1.2rem;
	}
`

export default StyledForm
