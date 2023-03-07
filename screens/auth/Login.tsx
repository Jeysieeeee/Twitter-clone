import React from 'react'
import { Text, View, Image} from 'react-native';
import Input from '../../components/Input';
import styles from '../../Style';
import Button from '../../components/Button';

const Login = () => {
  return (
    <View style={styles.loginContainer}>
    <Image 
      source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png'}}
      style={{width: 60, height: 50, alignSelf:'center',marginTop: 100}}
    />
    <Text style={styles.logintoTwitterStyle}>Log in to Twitter</Text>

      <Input/>
      <Button style={styles.submitButton}
      title={''}
       buttonStyle={false} 
       buttonTextStyle={false} />

       <Text style={styles. hyperlinkStyle}>Forget Password? Sign up for Twitter</Text>
    </View>

  )
}

export default Login