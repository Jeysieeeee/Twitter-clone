import React, { useState } from 'react'
import { TextInput } from 'react-native'
import styles from '../Style'

type InputFieldProps = {
  placeholder: string,
  secureTextEntry?: boolean,
  onChangeText: (text: string) => void,
}

const InputField = ({ placeholder, secureTextEntry, onChangeText }: InputFieldProps) => {
  const [value, setValue] = useState('')

  const handleTextChange = (text: string) => {
    setValue(text)
    onChangeText(text)
  }

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={handleTextChange}
    />
  )
}

export default InputField
