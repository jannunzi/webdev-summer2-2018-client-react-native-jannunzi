import React, {Component} from 'react'
import {View} from 'react-native'
import {Button, Text, List, ListItem} from 'react-native-elements'

export default class ApplicationList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applications: []
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:3000/api/application')
      .then(response => response.json())
      .then(applications => this.setState({applications: applications}))
  }
  render() {
    return(
      <View>
        <List>
          {
            this.state.applications
              .map(application =>
                <ListItem
                  onPress={() =>
                    this.props.navigation
                      .navigate('ApplicationEditor', {application: application})}
                  title={application.title}
                  key={application._id}/>
              )
          }
        </List>
      </View>
    )
  }
}