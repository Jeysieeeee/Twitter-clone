import React, { useState } from 'react'
import { TextInput } from 'react-native'
import styles from '../Style'

type InputFieldProps = {
  placeholder: string,
  secureTextEntry?: boolean,
  value: string,
  onChangeText: (text: string) => void,
}

const InputField = ({ placeholder, secureTextEntry, value, onChangeText }: InputFieldProps) => {

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={(text)=>onChangeText(text)}
    />
  )
}

export default InputField
