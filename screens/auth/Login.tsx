import React from 'react'
import { Text, View, Image } from 'react-native';
import Input from '../../components/InputField';
import styles from '../../Style';
import Button from '../../components/Button';

const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png' }}
        style={styles.TwitterLogo}
      />
      <Text style={styles.logintoTwitterStyle}>Log in to Twitter</Text>

      <Input
        placeholder={'Username'}
        onChangeText={function (text: string): void {
          throw new Error('Function not implemented.');
        }} />
      <Input
        placeholder={'Password'}
        onChangeText={function (text: string): void {
          throw new Error('Function not implemented.');
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