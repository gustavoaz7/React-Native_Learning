import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { connect } from 'react-redux'

import { CardSection, Field } from './common'
import { employeeUpdate } from '../actions'

class EmployeeForm extends Component {

    onNameChange(text) {
        this.props.employeeUpdate({ key: 'name', value: text })
    }

    onPhoneChange(text) {
        this.props.employeeUpdate({ key: 'phone', value: text })
    }

    onShiftChange(text) {
        this.props.employeeUpdate({ key: 'shift', value: text })
    }
    
    render() {
        return (
            <View>
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
            </View>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm)

