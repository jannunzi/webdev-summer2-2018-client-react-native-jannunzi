import React, {Component} from 'react'
import {View} from 'react-native'
import {Text, FormLabel, FormInput, Button} from 'react-native-elements'

class ApplicationEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  componentDidMount = () => {
    const aid = this.props.navigation.getParam('application')._id;
    fetch('http://localhost:3000/api/application/' + aid)
      .then(response => response.json())
      .then(application => this.setState(application))
  }

  updateApplication = () => {
    this.props.navigation.goBack()
  }

  render() {
    return(
      <View>
        <FormLabel>Title</FormLabel>
        <FormInput value={this.state.title}/>
        <Button
          onPress={this.updateApplication}
          title="Update"/>
        <Button
          onPress={this.updateApplication}
          title="Create"/>
        <Button
          onPress={this.updateApplication}
          title="Delete"/>
      </View>
    )
  }
}

export default ApplicationEditor