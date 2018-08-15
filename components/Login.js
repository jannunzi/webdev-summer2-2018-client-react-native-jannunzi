import React from 'react'
import {View} from 'react-native'
import {Text, Button} from 'react-native-elements'

const Login = ({navigation}) =>
  <View>
    <Text h2>Login</Text>
    <Button
      title="Login"
      onPress={() =>
        navigation.navigate('Profile')}/>
    <Button
      title="Register"
      onPress={() =>
        navigation.navigate('Registration')}/>
    <Button
      title="Home"
      onPress={() =>
        navigation.navigate('Home')}/>

  </View>

export default Login