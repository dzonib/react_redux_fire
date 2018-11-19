import styled from 'styled-components'

const StyledProject = styled.section `
    display: grid;
    justify-content: center;
    color: ${props => props.theme.black};
    font-size: 2rem;
    height: 600px;
    overflow-y: scroll;
    h2 {
        margin: 5rem 0 1rem 0;
    }
    p {
        margin: 0;
    }
    .date {
        color: #9E9E9E;
    }
`

export default StyledProject