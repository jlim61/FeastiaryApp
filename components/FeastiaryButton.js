import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';
import { Colors } from '../styles/globalStyles';


const FeastiaryButton = ({Title, OnPress, ButtonStyle, TitleStyle }) => {
  return (
    <View>
      <Button title={Title} onPress={OnPress} buttonStyle={[styles.defaultButton, ButtonStyle]} titleStyle={TitleStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  defaultButton: {
    backgroundColor: Colors.brand,
    borderRadius: 26,
    paddingVertical: 12,
    paddingHorizontal: 20,
    height: 54,
  },
});


export default FeastiaryButton;