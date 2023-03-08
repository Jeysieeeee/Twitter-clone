import React from 'react'
import { Text, StyleProp, TextStyle, View, TouchableOpacity } from 'react-native';

interface Buttonprops {
  title: string;
  onPress?: any;
  style?: StyleProp<TextStyle> | undefined;
  icon?: any;
  styleText?: StyleProp<TextStyle> | undefined;
  buttonStyle: StyleProp<TextStyle> | undefined;
  buttonTextStyle: StyleProp<TextStyle> | undefined;
}

const Button = ({ title, onPress, icon, styleText, buttonStyle, buttonTextStyle}: Buttonprops) => {
  return (
    <TouchableOpacity 
    style={buttonStyle} 
    onPress={onPress} >
      {icon ? <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        {icon}
        <Text style={buttonTextStyle}>{title}</Text>
      </View>
      : <Text style={styleText}>{title}</Text>
    }
      
    </TouchableOpacity>
  );
};

export default Button;
