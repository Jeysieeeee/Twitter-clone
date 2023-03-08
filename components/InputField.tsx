import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../Style'

type Props = {
  placeholder: string,
  secureTextEntry?: boolean,
  onChangeText: (text: string) => void,
}

const InputField = ({ placeholder, secureTextEntry, onChangeText }: Props) => {
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
