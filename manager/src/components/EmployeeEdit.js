import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { Card, CardSection, Button } from './common'
import { employeeUpdate, employeeSave } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {

    componentWillMount() {
        _.each(this.props.employee,(value, key) => {
            this.props.employeeUpdate({ key, value })
        })
    }

    onButtonPress() {
        const { name, phone, shift, employee } = this.props
        this.props.employeeSave({ name, phone, shift, uid: employee.uid })
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button
                        content='Save changes'
                        onPress={this.onButtonPress.bind(this)}
                    />
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit)