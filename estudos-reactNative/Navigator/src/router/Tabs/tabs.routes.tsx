import React from "react";

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import Example from '../../../Example';


const MainTabs = createBottomTabNavigator({
    Feed: {
      screen: Example,
      navigationOptions: {
        tabBarLabel: 'Feed',
      },
    },
    Search: {
      screen: Example,
      navigationOptions: {
        tabBarLabel: 'Search',
      },
    },
    Discover: {
      screen: Example,
      navigationOptions: {
        tabBarLabel: 'Discover',
      },
    },
  });

  const Router = createAppContainer(MainTabs);


  export default function TabRouter() {
  
    return (  
        <Router/>  
    );
  }