import React from 'react'
import { Text, Pressable } from 'react-native';
import styles from '../Style';

const Button = ({ title, onPress, style = styles.button }) => {
    return (
      <Pressable style={style} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    );
};
  
  export default Button;
