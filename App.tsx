import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import OnBoarding from './screens/auth/OnBoarding';
import Login from './screens/auth/Login'
import NewsFeed from './screens/auth/NewsFeed';

export default function App() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* <OnBoarding /> */}
      {/* <Login/> */}
      <NewsFeed/>
    </View>
  );
}