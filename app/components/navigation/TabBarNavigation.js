import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './../home/Home';
import History from './../history/History';
import Exchange from './../exchange/Exchange';
import Profile from './../profile/Profile';
import Constant from '../../controller/Constant';

const Tab = createBottomTabNavigator();

const TabBarNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabel: ({focused, color, position}) => {
          let focusedColor = focused ? '#00CEFF' : '#CCCCE3';
          return (
            <Text
              style={{
                paddingTop: 10,
                color: focusedColor,
                fontSize: 14,
                fontFamily: Constant.fonts.poppinsMedium,
              }}>
              {route.name}
            </Text>
          );
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let focusedColor = focused ? '#00CEFF' : '#CCCCE3';
          if (route.name === Constant.screenName.Home) {
            iconName = Constant.icons.tabbar_home;
          } else if (route.name === Constant.screenName.History) {
            iconName = Constant.icons.tabbar_history;
          } else if (route.name === Constant.screenName.Exchange) {
            iconName = Constant.icons.tabbar_convert;
          } else if (route.name === Constant.screenName.Profile) {
            iconName = Constant.icons.tabbar_profile;
          } else {
            iconName = Constant.icons.setting;
          }
          return (
            <Image
              source={iconName}
              style={{tintColor: focusedColor, width: 20, height: 20}}
              resizeMode="contain"
            />
          );
        },
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          paddingVertical: 12,
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          fontFamily: Constant.fonts.poppinsSemiBold,
          fontSize: 16,
        },
        tabBarShowLabel: true,
      })}>
      <Tab.Screen name={Constant.screenName.Home} component={Home} />
      <Tab.Screen name={Constant.screenName.History} component={History} />
      <Tab.Screen name={Constant.screenName.Exchange} component={Exchange} />
      <Tab.Screen name={Constant.screenName.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabBarNavigation;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '500',
  },
});
