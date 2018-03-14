import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Communications from 'react-native-communications'

import { Card, CardSection, Button, Confirm } from './common'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {
    state = {
        showModal: false
    }

    componentWillMount() {
        _.each(this.props.employee,(value, key) => {
            this.props.employeeUpdate({ key, value })
        })
    }

    onButtonPress() {
        const { name, phone, shift, employee } = this.props
        this.props.employeeSave({ name, phone, shift, uid: employee.uid })
    }

    onTextPress() {
        const { phone, shift } = this.props
        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }

    onAccept() {
        const { uid } = this.props.employee
        this.props.employeeDelete({ uid })
    }

    onDecline() {
        this.setState({ showModal: false })
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
                <CardSection>
                    <Button 
                        content='Text Schedule'
                        onPress={this.onTextPress.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Button 
                        content='Fire Employee'
                        onPress={() => this.setState({ showModal: !this.state.showModal })}
                    />
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit)