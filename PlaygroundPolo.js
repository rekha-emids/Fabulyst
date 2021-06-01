'use strict'
/**
 * @providesModule PlaygroundPolo
 * @flow
 */
import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'

const TopNavigation = () => (
  <View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'pink' }}>
    <View style={{ flex: 1 }}><Text>My App</Text></View>
    <Menu onSelect={(value) => Alert.alert(`User selected the number ${value}`)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}>&#8942;</Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value='edit'>
          <Text>Edit</Text>
        </MenuOption>
        <MenuOption value='remove'>
          <Text>Remove</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
)

class PlaygroundPolo extends Component {
  render () {
    return (
      <MenuContext style={{ flex: 1, marginTop: 40 }}>
        <TopNavigation />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Hello!</Text></View>
      </MenuContext>
    )
  }
}

export default PlaygroundPolo
