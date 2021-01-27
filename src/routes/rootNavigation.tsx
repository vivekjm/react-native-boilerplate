import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomePage} from '../pages/Home/Home.page';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {LoginPage} from '../pages/Login/Login.page';

const Tab = createMaterialBottomTabNavigator();
const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="LoginPage" component={LoginPage} />
        <RootStack.Screen name="HomePage" component={HomePage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export {RootNavigation};
