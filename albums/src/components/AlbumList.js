import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => this.setState({ albums: res.data }))
    }

    renderAlbums() {
        return this.state.albums.map((album, i) => <Text key={`album  ${i}`} >{album.title}</Text>)
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList
