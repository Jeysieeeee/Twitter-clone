import React from 'react'
import { TextInput, StyleProp, TextStyle} from 'react-native'
import { styled } from "nativewind";


type InputFieldProps = {
  placeholder: string,
  secureTextEntry?: boolean,
  style?: StyleProp<TextStyle>;
  value: string,
  onChangeText: (text: string) => void,

}

const InputField = ({ placeholder, secureTextEntry, value, onChangeText }: InputFieldProps) => {

  return (
    <TextInput
     className='mt-5 border-b-2 self-center border-b-gray-300 w-9/12 align-text-top pb-3'
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={(text)=>onChangeText(text)}
    />
  )
}

export default styled (InputField)
