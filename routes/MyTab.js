import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, DoneStack } from './MyStack';

const Tab = createBottomTabNavigator();
const MyTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Done" component={DoneStack} />
    </Tab.Navigator>
  );
};

export default MyTab;
