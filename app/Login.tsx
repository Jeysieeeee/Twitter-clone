import React, { useState } from 'react'
import { Text, View, Image } from 'react-native';
import InputField from '../components/InputField';
import styles from '../Style';
import Button from '../components/Button';
import TwitterIcon from '../icon/TwitterIcon';
import {useRouter} from 'expo-router';

const Login = () => {
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
const router=useRouter()
  return (
    <View style={styles.loginContainer}>
      <TwitterIcon 
      style = {styles.twitterLogo }
      width={48} 
      height={48}
      />
      <Text style={styles.logintoTwitterStyle}>Log in to Twitter</Text>

      <InputField
        placeholder={'Username'}
        value= {userName}
        onChangeText={ (text) => {
          setUserName(text)
        }} />
      <InputField
        placeholder={'Password'}
        value= {password}
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text)
        }} />

      <View>
        <Button
          buttonStyle={styles.submitButton}
          styleText={styles.loginText}
          title="Log in"
          onPress={() => router.push('/tabs/')}
          buttonTextStyle={false} />
      </View>
      <View style={styles.forgetPasswordCointainer}>
      <Text style={styles.hyperlinkStyle}>Forget Password?  </Text>
      <Text style={styles.hyperlinkStyle}>Sign up for Twitter</Text>
      </View>
      
    </View>

  )
}

export default Login