import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';

const FeastiaryButton = ({Title, OnPress}) => {
  return (
    <View>
      <Button title={Title} onPress={OnPress} />
    </View>
  )
}

export default FeastiaryButton;