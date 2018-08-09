import React, {Component} from 'react'
import {View} from 'react-native'
import {Text, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

export default class EssayQuestion
  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '', description: '', points: 0
    }
  }

  formUpdate = update => {
    this.setState(update)
  }

  render() {
    return(
      <View>
        <Text h3>Essay Question Editor</Text>
        <FormLabel>Question Title</FormLabel>
        <FormInput onChangeText={
          text => this.formUpdate({title: text}) }/>
        <FormValidationMessage>
          Title is required
        </FormValidationMessage>
        <Text h4>Preview</Text>
        <Text h4>{this.state.title}</Text>
      </View>
    )
  }
}