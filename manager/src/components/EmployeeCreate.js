import React, { Component } from 'react'
import { Picker, Text } from 'react-native'
import { connect } from 'react-redux'

import { Card, CardSection, Field, Button } from './common'
import { employeeUpdate, employeeCreate } from '../actions'

class EmployeeCreate extends Component {

    onNameChange(text) {
        this.props.employeeUpdate({ key: 'name', value: text })
    }

    onPhoneChange(text) {
        this.props.employeeUpdate({ key: 'phone', value: text })
    }

    onShiftChange(text) {
        this.props.employeeUpdate({ key: 'shift', value: text })
    }

    onButtonPress() {
        const { name, phone, shift } = this.props
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
    }

  render() {
    return (
      <Card>
        <CardSection>
            <Field
                label='Name'
                placeholder='Steve'
                value={this.props.name}
                onChangeText={this.onNameChange.bind(this)}
            />
        </CardSection>
        <CardSection>
            <Field
                label='Phone'
                placeholder='555-555-555'
                value={this.props.phone}
                onChangeText={this.onPhoneChange.bind(this)}
            />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }} >
            <Text style={styles.pickerText} >Select Shift</Text>
            <Picker
                // style={{ flex: 2 }}
                selectedValue={this.props.shift}
                onValueChange={this.onShiftChange.bind(this)}
            >
                <Picker.item label='Monday' value='Monday' />
                <Picker.item label='Tuesday' value='Tuesday' />
                <Picker.item label='Wednesday' value='Wednesday' />
                <Picker.item label='Thursday' value='Thursday' />
                <Picker.item label='Friday' value='Friday' />
                <Picker.item label='Saturday' value='Saturday' />
                <Picker.item label='Sunday' value='Sunday' />
            </Picker>
        </CardSection>
        
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

const styles = {
    pickerText: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)
