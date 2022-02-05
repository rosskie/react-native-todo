import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Done from '../screens/Done';
import ReviewDetails from '../screens/Task';
import React from 'react';

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#00a9e0'
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
};
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={({route}) => ({title: route.params.task})} />
    </Stack.Navigator>
  );
};

const AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" component={About}/>
    </Stack.Navigator>
  );
};

const DoneStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Done" component={Done} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={({route}) => ({title: route.params.task})} />
    </Stack.Navigator>
  );
};

export { HomeStack, AboutStack, DoneStack };
