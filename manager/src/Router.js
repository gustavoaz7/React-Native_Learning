import React from 'react'
import { Scene, Router, Stack, Actions } from 'react-native-router-flux'

import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

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
                    initial
                    key='employeeList'
                    component={EmployeeList}
                    title='Employees'
                    rightTitle='Add'
                    onRight={() => Actions.employeeCreate()}
                />
                <Scene
                    key='employeeCreate'
                    component={EmployeeCreate}
                    title='Create Employee'
                />
            </Scene>
        </Stack>
    </Router>
)

export default RouterComponent
