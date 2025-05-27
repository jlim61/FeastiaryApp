import { StyleSheet, View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react';
import { FeastiaryInput, FeastiaryButton, FeastiaryText } from '../components';
import DinoBookLogo from '../assets/images/DinoBookLogo.svg';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FontSizes, FontFamilies, Colors } from '../styles/globalStyles';


const AuthScreen = () => {
    const [isAuthScreen, setIsAuthScreen] = useState(true);
    const [newUserStatus, setNewUserStatus] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const registerUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return updateProfile(user, { displayName: name });
        })
        .then(() => {
            console.log("Profile updated!");
            // navigate to home or clear form etc.
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    const GoToAuth = () => {
        setIsAuthScreen(true);
        setNewUserStatus(false);
        setEmail('');
        setPassword('');
        setName('');
    }

    const GoToLogin = () => {
        setIsAuthScreen(false);
        setNewUserStatus(false);
        setEmail('');
        setPassword('');
        setName('');
    }

    const GoToRegister = () => {
      console.log('Go to Register pressed');
        setIsAuthScreen(false);
        setNewUserStatus(true);
        setEmail('');
        setPassword('');
        setName('');
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {isAuthScreen ? (
        <View style={styles.authContainer}>
            <FeastiaryText Style={styles.titleText}>
              feastiary
            </FeastiaryText>

            <View style={styles.buttonContainer}>
                <FeastiaryButton
                TitleStyle={styles.buttonText}
                Title='Login' 
                OnPress={GoToLogin}></FeastiaryButton>
                
                <FeastiaryButton
                TitleStyle={styles.buttonText}
                Title='Register' 
                OnPress={GoToRegister}></FeastiaryButton>
            </View>
        </View>
        ) : !newUserStatus ? (
          <View>
            <Text>Login Screen</Text>
            {/* <DinoBookLogo width={100} height={100} /> */}
            <FeastiaryInput 
              Placeholder='Enter your email' 
              Label='Email' 
              LeftIcon={{type: 'material', name: 'email'}} 
              Value={email} 
              OnChangeText={setEmail} 
              KeyboardType={"email-address"} 
            />
            <FeastiaryInput 
              Placeholder='Enter your password' 
              Label='Password' 
              LeftIcon={{type: 'material', name: 'lock'}} 
              Value={password} 
              OnChangeText={setPassword} 
              SecureTextEntry={true} 
              KeyboardType={"numeric"} 
            />
            
            <View style={styles.buttonContainer}>
                <FeastiaryButton
                TitleStyle={styles.buttonText}
                Title='Login' 
                OnPress={() => console.log('Login pressed')}></FeastiaryButton>
                
                <FeastiaryButton
                TitleStyle={styles.buttonText}
                Title='Back to Authentication' 
                OnPress={GoToAuth}></FeastiaryButton>
            </View>
          </View>
        ) : (
          <View>
            <Text>Register Screen</Text>
            <FeastiaryInput 
              Placeholder='Enter your Enter your name' 
              Label='Name' 
              LeftIcon={{type: 'material', name: 'person'}} 
              Value={name} 
              OnChangeText={setName} 
            />
            <FeastiaryInput 
              Placeholder='Enter your email' 
              Label='Email' 
              LeftIcon={{type: 'material', name: 'email'}} 
              Value={email} 
              OnChangeText={setEmail} 
              KeyboardType={"email-address"} 
            />
            <FeastiaryInput 
              Placeholder='Enter your password' 
              Label='Password' 
              LeftIcon={{type: 'material', name: 'lock'}} 
              Value={password} 
              OnChangeText={setPassword} 
              SecureTextEntry={true} 
              KeyboardType={"numeric"} 
            />
            
            <View style={styles.buttonContainer}>
                <FeastiaryButton
                TitleStyle={styles.buttonText}
                Title='Register' 
                OnPress={registerUser}></FeastiaryButton>
                
                <FeastiaryButton
                TitleStyle={styles.buttonText}
                Title='Back to Authentication' 
                OnPress={GoToAuth}></FeastiaryButton>
            </View>
          </View>
        )}
      </View>
      </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    authContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 200
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },

    buttonText: {
        fontSize: FontSizes.large,
        color: 'black',
        fontWeight: 600,
    },

    titleText: {
        fontSize: FontSizes.title,
        color: Colors.title,
        fontWeight: 600,
    }
})

export default AuthScreen;
