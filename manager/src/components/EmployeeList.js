import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import _ from 'lodash'

import { employeesFetch } from '../actions'
import ListItem from './ListItem'

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch()
    }

    renderList(employees) {
        return !employees ? null : (
            <FlatList
                data={employees}
                renderItem={({ item }) => this.renderRow(item)}
                keyExtractor={(item) => item.uid}
            />
        )
    }

    renderRow(employee) {
        return <ListItem employee={employee} />
    }

    render() {
        return (
            <View>
                {this.renderList(this.props.employees)}
            </View>
        )
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (employee, uid) => ({ ...employee, uid }))
    return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
