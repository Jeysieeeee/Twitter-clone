import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import OnBoarding from './screens/auth/OnBoarding';
import Login from './screens/auth/Login'
import NewsFeed from './screens/auth/NewsFeed';
import Profile from './screens/Profile';

export default function App() {
  return (
    <View style={{ flex: 1, paddingVertical:10}}>
      {/* <OnBoarding /> */}
      {/* <Login/> */}
      {/* <NewsFeed/> */}
      <Profile/>
    </View>
  );
}