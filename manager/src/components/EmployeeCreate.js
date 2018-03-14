import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardSection, Button } from './common'
import { employeeCreate } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
    }

    render() {
        return (
        <Card>
            <EmployeeForm {...this.props} />
            <CardSection>
                <Button
                    content='Create'
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

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate)
