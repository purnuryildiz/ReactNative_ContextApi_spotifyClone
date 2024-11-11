import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenName from '../constants/ScreenName';
import HomeScreen from '../screens/HomeScreen';
import LikedSongScreen from '../screens/LikedSongScreen';
import LoginScreen from '../screens/LoginScreen';
import SongInfoScreen from '../screens/SongInfoScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PremiumScreen from '../screens/PremiumScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SearchScreen from '../screens/SearchScreen';
import Feather from 'react-native-vector-icons/Feather';
import YourLibraryScreen from '../screens/YourLibraryScreen';
import {createDrawerNavigator} from '@react-navigation/drawer'; // Drawer Navigator'ı ekle
import AccountScreen from '../screens/AccountScreen';

// BOTTOM_TAB NAVIGATION
const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgba(0,0,0,0.93)',
          shadowOpacity: 4,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTopWidth: 0,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name={ScreenName.home}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {color: 'white', fontSize: 13, fontWeight: '500'},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Entypo name="home" size={24} color="white" />
            ) : (
              <AntDesign name="home" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name={ScreenName.search}
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarLabelStyle: {color: 'white', fontSize: 13, fontWeight: '500'},
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome name="search" size={24} color="white" />
            ) : (
              <Feather name="search" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name={ScreenName.yourLibrary}
        component={YourLibraryScreen}
        options={{
          tabBarLabel: 'Your Library',
          tabBarLabelStyle: {color: 'white', fontSize: 13, fontWeight: '500'},
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome name="folder-open" size={24} color="white" />
            ) : (
              <FontAwesome name="folder-o" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name={ScreenName.premium}
        component={PremiumScreen}
        options={{
          tabBarLabel: 'Premium',
          tabBarLabelStyle: {color: 'white', fontSize: 13, fontWeight: '500'},
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome5 name="spotify" size={24} color="white" />
            ) : (
              <SimpleLineIcons name="social-spotify" size={24} color="white" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

// STACK NAVIGATION
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenName.login} component={LoginScreen} />
        {/* Bottom tabslar entegre edildi */}
        <Stack.Screen name="Main" component={BottomTabs} />

        <Stack.Screen name={ScreenName.liked} component={LikedSongScreen} />
        <Stack.Screen name={ScreenName.songInfo} component={SongInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
