import React from 'react';
import {TabNavigator} from 'react-navigation';

import {Home} from './Component/Screen/Home';
import {Hero} from './Component/Screen/Hero';
import {Setting} from './Component/Screen/Setting';

const Tab = TabNavigator({
  Home: {
    Screen: Home,
  },
  Hero: {
    Screen: Hero,
  },
  Setting: {
    Screen: Setting,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f8f8f8',
    activeBackgroundColor: '#586589',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#123456',
    },

    labelStyle: {
      fontSize: 10,
      color: 'white',
      padding: 5,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}