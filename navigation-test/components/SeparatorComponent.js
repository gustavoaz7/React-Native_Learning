import React from 'react'
import { StyleSheet } from 'react-native'
import { Block } from '../base-components';

export const SeparatorComponent = () => <Block style={styles.separator} />

const styles = StyleSheet.create({
  separator: {
    height: 20,
  }
})