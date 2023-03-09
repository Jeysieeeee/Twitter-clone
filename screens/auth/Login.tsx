import React, { useState } from 'react'
import { Text, View, Image } from 'react-native';
import InputField from '../../components/InputField';
import styles from '../../Style';
import Button from '../../components/Button';

const Login = () => {
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
  return (
    <View style={styles.loginContainer}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png' }}
        style={styles.twitterLogo}
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
          onPress={() => alert('Button pressed')}
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