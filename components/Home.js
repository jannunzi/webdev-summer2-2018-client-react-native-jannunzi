import React from 'react'
import {View} from 'react-native'
import {Text, Button} from 'react-native-elements'

const Home = ({navigation}) =>
  <View>
    <Text h2>Home</Text>
    <Button
      title="Login"
      onPress={() =>
        navigation.navigate('Login')}/>
    <Button
      title="Signup"
      onPress={() =>
        navigation.navigate('Registration')}/>
  </View>

export default Home