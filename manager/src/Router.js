import React from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'

import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => (
    <Router>
        <Stack hideNavBar >
            <Scene key='auth' >
                <Scene 
                    key='login'
                    component={LoginForm}
                    title='Please Login'
                />
            </Scene>
            <Scene key='main' >
                <Scene 
                    key='employeeList'
                    component={EmployeeList}
                    title='Employees'
                />
            </Scene>
        </Stack>
    </Router>
)

export default RouterComponent
