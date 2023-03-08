import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Linking, TouchableOpacity} from 'react-native';
import styles from '../../Style';
import Button from '../../components/Button'
import GoogleIcon from '../../icon/GoogleIcon';
import AppleIcon from '../../icon/AppleIcon';

const OnBoarding = () => {
  return (

    <View style={styles.container}>
    <Image 
      source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png'}}
      style={styles.TwitterLogoOnBoarding}
  />
  <View>    
    <Text style={styles.text}>See what’s {'\n'}happening in the {'\n'}world right now. </Text>
  </View>

   <View>
      <Button 
      buttonStyle={styles.button}
      buttonTextStyle={styles.buttonText}
      icon={<GoogleIcon width={48} height={48}/>}
      title= "Continue with Google" 
       onPress={() => alert('Button pressed')}
      />
    </View>

    <View>
      <Button
      buttonStyle={styles.button}
      buttonTextStyle={styles.buttonText}
      title= "Continue with Apple"
      icon={<AppleIcon width={40} height={40}/> }
      onPress={() => alert('Button pressed')}
      />
    </View>

    <View>
      <Text style = {styles.orText}> or </Text>
    </View>

    <View>
      <Button
          buttonStyle={styles.buttonCreate}
          styleText={styles.createAccountText}
          title="Create an account"
          onPress={() => alert('Button pressed')} 
          buttonTextStyle={false}      />
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

    <View style = {styles.loginTextContainer}>
      <Text> Already have an account? </Text> 
      <TouchableOpacity><Text style={{color: 'blue'}}>Log in</Text></TouchableOpacity>
    </View>
 <StatusBar style="auto" />

  </View>
  )
}

export default OnBoarding