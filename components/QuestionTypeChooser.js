import React, {Component} from 'react'
import {View} from 'react-native'
import {ButtonGroup, Text, Icon} from 'react-native-elements'

const component1 = () =>
  <View style={{backgroundColor: 'yellow'}}>
    <Text h4>Multiple Choice</Text></View>
const component2 = () =>
  <Text>Fill in the blank</Text>
const component3 = () =>
  <Text h2>Essay</Text>
const component4 = () =>
  <Icon name='list' type='font-awesome'/>


const buttonTitles = [
  {element: component1},
  {element: component2},
  {element: component3},
  {element: component4},
]

class QuestionTypeChooser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedQuestionType: 3
    }
  }

  updateIndex = (index) =>
    this.setState({
      selectedQuestionType: index
    })

  render() {
    return(
      <View>
        <Text h3>Type: {this.state.selectedQuestionType}</Text>
        <ButtonGroup
          buttons={buttonTitles}
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedQuestionType}
          containerStyle={{height: 75}}
        />
      </View>
    )
  }
}

export default QuestionTypeChooser