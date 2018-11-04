import React, { Component } from 'react'
import { StyledDashboard } from '../Styles/Dashboard/StyledDashboard'

import Notifications from './Notifications';
import ProjectList from '../Projects/ProjectList'

class Dashboard extends Component {
    render() {
        return (
            <StyledDashboard>
                <div style={{
                    height: '200px',
                    width: '100%',
                }}>
                    <ProjectList />
                </div>
                <div style={{
                    height: '200px',
                    width: '200px',
                    background: 'purple'
                }}>
                    <Notifications />
                </div>
            </StyledDashboard>
        )
    }
}


export default Dashboard