import { StyleSheet, View, Text } from 'react-native'
import React, { useState } from 'react'
import FeastiaryInput from '../components/FeastiaryInput';
import FeastiaryButton from '../components/FeastiaryButton';


const AuthScreen = () => {
    const [newUserStatus, setNewUserStatus] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {!newUserStatus ? (
        <View>
          <Text>Login Screen</Text>
          <FeastiaryInput 
            Placeholder='Enter your email' 
            Label='Email' 
            leftIcon={{type: 'material', name: 'email'}} 
            Value={email} 
            OnChangeText={setEmail} 
            KeyboardType={"email-address"} 
          />
          <FeastiaryInput 
            Placeholder='Enter your password' 
            Label='Password' 
            leftIcon={{type: 'material', name: 'lock'}} 
            Value={password} 
            OnChangeText={setPassword} 
            SecureTextEntry={true} 
            KeyboardType={"numeric"} 
          />
          <FeastiaryButton 
            Title='Login' 
            OnPress={() => console.log('Login pressed')}></FeastiaryButton>
            
          <FeastiaryButton 
            Title='Go To Sign Up' 
            OnPress={() => setNewUserStatus(true)}></FeastiaryButton>

        </View>
      ) : (
        <View>
          <Text>Register Screen</Text>
          <FeastiaryInput 
            Placeholder='Enter your email' 
            Label='Email' 
            leftIcon={{type: 'material', name: 'email'}} 
            Value={email} 
            OnChangeText={setEmail} 
            KeyboardType={"email-address"} 
          />
          <FeastiaryInput 
            Placeholder='Enter your password' 
            Label='Password' 
            leftIcon={{type: 'material', name: 'lock'}} 
            Value={password} 
            OnChangeText={setPassword} 
            SecureTextEntry={true} 
            KeyboardType={"numeric"} 
          />
          
          <FeastiaryButton 
            Title='Sign Up' 
            OnPress={() => console.log('Login pressed')}></FeastiaryButton>
            
          <FeastiaryButton 
            Title='Go To Log In' 
            OnPress={() => setNewUserStatus(false)}></FeastiaryButton>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AuthScreen;
