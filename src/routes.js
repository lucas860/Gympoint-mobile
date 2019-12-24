import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';

import Checkin from '~/pages/Checkin';
import HelpList from '~/pages/Help/HelpList';
import HelpAnswer from '~/pages/Help/HelpAnswer';
import HelpRequest from '~/pages/Help/HelpRequest';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Checkin,
            Help: {
              screen: createStackNavigator({
                HelpList,
                HelpAnswer,
                HelpRequest,
              }),
              navigationOptions: {
                tabBarLabel: 'Pedir Ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon size={20} color={tintColor}>
                    help_outline
                  </Icon>
                ),
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              style: {
                height: 70,
                paddingTop: 15,
                paddingBottom: 15,
                borderTopColor: '#DDDDDD',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
