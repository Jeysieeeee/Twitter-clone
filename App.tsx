import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Linking} from 'react-native';
import styles from './Style';
import Buttons from './Login-Page/Button'
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png'}}
        style={{width: 40, height: 33, alignSelf:'center',marginTop: 50}}
    />
    <View>    
      <Text style={styles.text}>See what’s {'\n'}happening in the {'\n'}world right now. </Text>
    </View>

     <View>
        <Buttons 
        title= "Continue with Google" onPress={() => 
        alert('Button pressed')}
        />
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'}} 
        style={{width:45, height:45, position: 'absolute', marginLeft: 30, marginTop: 30}}
        />
      </View>

      <View>
        <Buttons 
        title= "Continue with Apple" onPress={() => 
        alert('Button pressed')}
        />
        <Image source={{uri: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png'}} 
        style={{width:50, height:50, position: 'absolute', marginLeft: 30, marginTop: 30}}
        />
      </View>

      <View>
        <Text style = {styles.orText}> or </Text>
      </View>

      <View>
        <Buttons
        title= "Create an account" onPress={() => 
        alert('Button pressed')}
        style= { styles.buttonCreate}
        />
      </View>
 
      <View style ={styles.textLinkContainer}>
        <Text> By signing up you agree to the {''}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://twitter.com/en/tos');
            }}>Terms of Service </Text>and{' '}
             <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://twitter.com/en/privacy');
            }}>Privacy Policy</Text>, 
                including 
                <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://stripe.com/cookies-policy/legal https://stripe.com/cookies-policy/legal');
            }}> Cookie Use</Text>.
            </Text>
      </View>

      <View style = {styles.LoginContainer}>
        <Text> Already have an account? Log in </Text>
      </View>
   <StatusBar style="auto" />

    </View>
  );
}