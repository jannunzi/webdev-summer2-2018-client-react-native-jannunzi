import React from 'react'
import {View} from 'react-native'
import {Text, Button} from 'react-native-elements'

const Profile = ({navigation}) =>
  <View>
    <Text h2>Profile</Text>
    <Button
      onPress={() =>
        navigation.navigate('ApplicationList')}
      title="Applications"/>
  </View>

export default Profile