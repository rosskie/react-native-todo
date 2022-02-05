import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global'

const ReviewDetails = ({ navigation, route }) => {
  const popHandler = () => {
    navigation.pop();
  };
  const pushHandler = () => {
    navigation.push('Home');
  };
  return (
    <View style={globalStyles.container}>
      <Text> - Task Details - </Text>
      <Text>ID: {route.params.id}</Text>
      
      <Text>Status: {String(route.params.done)}</Text>
      <Text>Task: {route.params.task}</Text>
      <Button title="got to home POP" onPress={popHandler} />
      
      <Button title="got to home PUSH" onPress={pushHandler} />
    </View>
  );
};

export default ReviewDetails;
