import React from 'react'
import { View } from 'react-native'
import { Text, ListItem } from 'react-native-elements'

const lists = [
  {	title: 'Question 1',
    subtitle: 'Multiple choice',
    icon: 'list'},
  {	title: 'Question 2',
    subtitle: 'Fill-in the blanks',
    icon: 'code'},
  {	title: 'Question 3',
    subtitle: 'True or false',
    icon: 'check'},
  {	title: 'Question 4',
    subtitle: 'Essay',
    icon: 'subject'}]

const ListExample = () =>
  <View>
    <Text h2>List Example</Text>

    {lists.map((list, i) => (
      <ListItem
        key={i}
        title={list.title}
        subtitle={list.subtitle}
        leftIcon={{name: list.icon}}/>
    ))}
    
    <ListItem
      title="Question A"
      leftIcon={{ name: "list" }}
      subtitle="Multiple choice"/>
    <ListItem
      title="Question B"
      leftIcon={{ name: "code" }}
      subtitle="Fill in the blanks"/>

    <ListItem title="Question 1"/>
    <ListItem title="Question 2"/>
    <ListItem title="Question 3"/>
    <ListItem title="Question 4"/>
    <ListItem/>
    <ListItem/>
    <ListItem/>
    <ListItem/>
  </View>

export default ListExample