import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import FixedHeader from './components/FixedHeader'
import TextHeadings from './components/TextHeadings'
import Icons from './components/Icons'
import ListExample from './components/ListExample'
import QuestionTypeChooser from './components/QuestionTypeChooser'
import QuestionTypePicker from './components/QuestionTypePicker'
import EssayQuestion from './components/EssayQuestion'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content"/>
        <FixedHeader/>
        <View style={{padding: 15}}>

          <EssayQuestion/>

          <QuestionTypePicker/>

          <QuestionTypeChooser/>

          <ListExample/>

          <TextHeadings/>
          <Icons/>
        </View>
        {/*<Text>Hello world from webdev summer 2 2018</Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
