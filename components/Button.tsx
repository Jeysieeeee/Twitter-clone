import React from 'react'
import { Text, StyleProp, TextStyle, View, TouchableOpacity } from 'react-native';
import { styled } from "nativewind";

interface Buttonprops {
  title: string;
  onPress?: any;
  style?: StyleProp<TextStyle>;
  icon?: any;
}

const Button = ({ title, onPress, icon, style}: Buttonprops) => {
  return (
    <TouchableOpacity 
    style={style} 
    onPress={onPress} >
      {icon ? <View className='flex flex-row self-center'>
        {icon}
        <Text className='text-xl font-bold'>{title}</Text>
      </View>
      : <Text className='text-xl font-bold self-center'>{title}</Text>
    }
    </TouchableOpacity>
  );
};

export default styled (Button)
