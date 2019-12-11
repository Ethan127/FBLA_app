import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { HeaderBackButton, ActivityIndicator, AsyncStorage, StatusBar, } from 'react-native';

import MainTabNavigator from './MainTabNavigator';
MainTabNavigator.navigationOptions={
  header: null,
};


/*====================================================================================*/
import LicenseScreen from '../screens/LicenseInfo';
const LicenseStack = createStackNavigator(
  {
    License: LicenseScreen,
  },
);
LicenseStack.path = '';
/*====================================================================================*/

/*====================================================================================*/
import QR from '../screens/QR';
const QRStack = createStackNavigator(
  {
    QRScanner: QR,
  },
);
QRStack.path = '';
/*====================================================================================*/

/*====================================================================================*/
import FormScreen from '../screens/FormScreen';
const FormStack = createStackNavigator(
  {
    Form: FormScreen,
  },
);
FormStack.path = '';
/*====================================================================================*/

/*====================================================================================*/
import OfficerScreen from '../screens/OfficerScreen';
const OfficerStack = createStackNavigator(
  {
    Officers: OfficerScreen,
  },
);
OfficerStack.path = '';
/*====================================================================================*/

/*====================================================================================*/
import QAScreen from '../screens/QA';
const QAStack = createStackNavigator(
  {
    QA: QAScreen,
  },
);
QAStack.path = '';
/*====================================================================================*/

/*====================================================================================*/
import EventsCal from '../screens/EventsCal';
const EventsStack = createStackNavigator(
  {
    EventsCal: EventsCal,
  },
);
EventsStack.path = '';
/*====================================================================================*/

/*====================================================================================*/
import EventsList from '../screens/EventList';
const EventsListStack = createStackNavigator(
  {
    EventsList: EventsList,
  },
);
EventsListStack.path = '';
const AppStack = createStackNavigator(
  {
    Main: MainTabNavigator,
    License: LicenseStack,
    Form: FormStack,
    QA: QAStack,
    EventsCal: EventsStack,
    Officers: OfficerStack,
    QR: QRStack,
    EventsList: EventsListStack,
  }
);
import LoginScreen from '../screens/LoginScreen';
import LoginScreenLoading from '../screens/LoginScreenLoading';
const AuthStack = createStackNavigator({ SignIn: LoginScreen });
/*====================================================================================*/

/*====================================================================================*/
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: LoginScreenLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
/*====================================================================================*/