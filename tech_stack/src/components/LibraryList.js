import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'

import ListItem from './ListItem'

class LibraryList extends Component {

    renderRow(library) {
        return <ListItem library={library} />
    }

    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={({ item }) => this.renderRow(item)}
                keyExtractor={item => `library ${item.id}`}
            />
        )
    }
}

const mapStateToProps = state => ({
    libraries: state.libraries
})

export default connect(mapStateToProps)(LibraryList)
