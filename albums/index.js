import React from 'react'
import { AppRegistry } from 'react-native'

import Header from './src/components/Header'

const App = () => (
    <Header content='My Albums' />
)

AppRegistry.registerComponent('albums', () => App)
