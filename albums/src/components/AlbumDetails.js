import React from 'react'
import { Text, View, Image } from 'react-native'

import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = (props) => {
    const { thumbnail_image, title, artist, image } = props.album
    
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainer} >
                    <Image 
                        source={{ uri: thumbnail_image }} 
                        style={styles.thumbnail} 
                    />
                </View>
                <View style={styles.textContainer} >
                    <Text style={styles.title} >{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    source={{ uri: image }} 
                    style={styles.image}    
                />
            </CardSection>
        </Card>
    )
}  

const styles = {
    title: {
        fontSize: 18
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnail: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    image: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail
