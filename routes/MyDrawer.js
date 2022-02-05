import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyTab from './MyTab';
import { AboutStack } from './MyStack';

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
    }}>
      <Drawer.Screen name="Home" component={MyTab} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
