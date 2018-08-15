import React from 'react'
import {View} from 'react-native'
import {Text, Button} from 'react-native-elements'

const Registration = ({navigation}) =>
  <View>
    <Text h2>Registration</Text>
    <Button
      title="Register"
      onPress={() =>
        navigation.navigate('Profile')}/>
    <Button
      title="Login"
      onPress={() =>
        navigation.navigate('Login')}/>
    <Button
      title="Home"
      onPress={() =>
        navigation.navigate('Home')}/>

  </View>

export default Registration