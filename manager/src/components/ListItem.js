import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback ,View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { CardSection } from './common'

class ListItem extends Component {

    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee })
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)} >
                <View>
                    <CardSection>
                        <Text>{this.props.employee.name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem
