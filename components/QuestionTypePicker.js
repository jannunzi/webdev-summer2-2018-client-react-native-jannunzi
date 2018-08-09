import React, {Component} from 'react'
import {View, Picker, Text} from 'react-native'
export default class QuestionTypePicker
  extends Component {
  constructor(props) {
    super(props)
    this.state = {questionType: 'TF'}
  }

  selectQuestion = (itemValue, itemIndex) =>
    this.setState({questionType: itemValue})

  render() {
    return(
      <View>
        <Text>{this.state.questionType}</Text>
        <Picker onValueChange={this.selectQuestion}
                selectedValue={this.state.questionType}>
          <Picker.Item value="MC" label="Multiple choice" />
          <Picker.Item value="ES" label="Essay" />
          <Picker.Item value="TF" label="True or false" />
          <Picker.Item value="FB" label="Fill in the blanks" />
        </Picker>
      </View>
    )
  }
}