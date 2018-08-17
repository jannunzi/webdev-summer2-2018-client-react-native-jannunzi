import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import FixedHeader from './components/FixedHeader'
import TextHeadings from './components/TextHeadings'
import Icons from './components/Icons'
import ListExample from './components/ListExample'
import QuestionTypeChooser from './components/QuestionTypeChooser'
import QuestionTypePicker from './components/QuestionTypePicker'
import EssayQuestion from './components/EssayQuestion'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import Profile from './components/Profile'
import ApplicationList from './components/ApplicationList'
import ApplicationEditor from './components/ApplicationEditor'
import {createStackNavigator} from 'react-navigation'

const Navigator = createStackNavigator({
  ApplicationList: {
    screen: ApplicationList,
    navigationOptions: () => ({
      title: 'Applications'
    })
  },
  ApplicationEditor: {
    screen: ApplicationEditor,
    navigationOptions: () => ({
      title: 'App Editor'
    })
  },
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home'
    })
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      title: 'Login'
    })
  },
  Registration: {
    screen: Registration,
    navigationOptions: () => ({
      title: 'Registration'
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      title: 'Profile'
    })
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Navigator/>
    );
  }
}
