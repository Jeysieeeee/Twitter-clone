import React from 'react';
import { Text, View, Linking, TouchableOpacity } from 'react-native';
import { useRouter, Link } from 'expo-router';

import Button from '../components/Button'
import GoogleIcon from '../icon/GoogleIcon';
import AppleIcon from '../icon/AppleIcon';
import TwitterIcon from '../icon/TwitterIcon';


const OnBoarding = () => {
  const router = useRouter()
  return (

    <View className='flex-1'>
      <View className='space-x-8 pt-4'>
        <TwitterIcon width={48} height={48} className='self-center py-20' />
        <Text className='text-4xl font-bold pb-9'>See what’s {'\n'}happening in the {'\n'}world right now. </Text>
      </View>
      <View className='pt-10 justify-center gap-3'>
        <View>
          <Button
            className='border-solid border border-gray-300 rounded-full p-2.5'
            icon={<GoogleIcon width={40} height={40} />}
            title="Continue with Google"
            onPress={() => alert('Button pressed')} />
        </View>

        <View>
          <Button
            className='border-solid border border-gray-300 rounded-full p-2.5'
            title="Continue with Apple"
            icon={<AppleIcon size={40} color={'black'} />}
            onPress={() => alert('Button pressed')}
          />
        </View>
        <View className="flex-row items-center gap-1">
          <View className="flex-1 h-px bg-gray-300" />
          <View>
            <Text className="w-50 text-center text-2xl">or</Text>
          </View>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        <View>
          <Button
            className='rounded-full p-5 bg-blue'
            title="Create an account"
            onPress={() => alert('Button pressed')}
          />
        </View>

        <View className=' self-center flex flex-row'>
          <Text > By signing up you agree to the {''}
            <Text
              className='text-blue'
              onPress={() => {
                Linking.openURL('https://twitter.com/en/tos');
              }}>Terms of Service </Text>and{' '}
            <Text
              className=' text-blue'
              onPress={() => {
                Linking.openURL('https://twitter.com/en/privacy');
              }}>Privacy Policy</Text>,
            including
            <Text
              className='text-blue'
              onPress={() => {
                Linking.openURL('https://stripe.com/cookies-policy/legal https://stripe.com/cookies-policy/legal');
              }}> Cookie Use</Text>.
          </Text>
        </View>
      </View>
      <View className='flex flex-row self-center gap-1 p-20'>
        <Text> Already have an account? </Text>
        
          <TouchableOpacity>
          <Link href={'/Login'} >
            <Text className=' text-blue'>Log in </Text>
           </Link>
         </TouchableOpacity>
     
      </View>

    </View>
  )
}

export default OnBoarding