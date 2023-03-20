import React, { useState } from 'react'
import { Text, TouchableOpacity, View, } from 'react-native';
import { useRouter } from 'expo-router';
import InputField from '../components/InputField';
import Button from '../components/Button';
import TwitterIcon from '../icon/TwitterIcon';



const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  return (
    <View className='self-center w-full h-full flex-auto pt-40'>
      <TwitterIcon
        className='self-center'
        width={48}
        height={48}
      />
      <Text className=' text-3xl pt-10 self-center font-semibold'>Log in to Twitter</Text>
      <View>
        <InputField
          placeholder={'Phone, email or username'}
          value={userName}
          onChangeText={(text) => {
            setUserName(text)
          }} />
        <InputField
          placeholder={'Password'}
          value={password}
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text)
          }} />
      </View>
      <View className='pt-5'>
        <Button
          className='rounded-full p-4 self-center bg-blue w-9/12'
          title="Log in"
          onPress={() => router.push('/tabs/NewsFeed')}
        />
      </View>
      <View className='pt-10 flex-row pl-10'>
        <TouchableOpacity>
          <Text className=' text-blue'>Forget Password?  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className='text-blue'>Sign up for Twitter</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default Login