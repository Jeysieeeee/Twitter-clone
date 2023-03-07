import React, { Component, useState } from 'react'
import styles from '../Style'
import { View, Text, TouchableOpacity, TextInput, Alert,} from 'react-native'

export const InputField =() => {
    const [handleEmail, setHandleEmail] = useState('')
    return (
        <View>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               value={handleEmail}
               onChangeText = {(text) => setHandleEmail(text)}/>
            
            {/* <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#000000"
               
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
             */}
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => alert(handleEmail)
                }>
             <Text style = {styles.login}> Log in </Text>
            </TouchableOpacity>
         </View>
      )
}
export default InputField
