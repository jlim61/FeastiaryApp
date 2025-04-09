import { View, Text } from 'react-native'
import React from 'react'
import { Input } from 'react-native-elements';


const FeastiaryInput = ({ Placeholder, Label, LeftIcon, Value, OnChangeText, SecureTextEntry = false, KeyboardType = "default" }) => {

  return (
    <View>
      <Input placeholder={Placeholder}
             label={Label ? Label : undefined}
             leftIcon={LeftIcon ? LeftIcon : undefined}
             value={Value}
             onChangeText={OnChangeText}
             secureTextEntry={SecureTextEntry}
             keyboardType={KeyboardType}></Input>
    </View>
  )
}

export default FeastiaryInput;