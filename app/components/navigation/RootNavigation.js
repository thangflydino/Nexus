import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabBarNavigation from "./TabBarNavigation";
import Constant from '../../controller/Constant';
import Login from "./../authentication/Login/Login";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="TabBarNavigation"
          >
            <Stack.Screen name={Constant.screenName.TabBar} component={TabBarNavigation} />
            <Stack.Screen name={Constant.screenName.Login} component={Login} />
          </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation