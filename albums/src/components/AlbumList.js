import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'

import AlbumDetail from './AlbumDetails'

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => this.setState({ albums: res.data }))
    }

    renderAlbums() {
        return this.state.albums.map((album, i) => 
            <AlbumDetail key={`album  ${i}`} album={album} />
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default AlbumList
