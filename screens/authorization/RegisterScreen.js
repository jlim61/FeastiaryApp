import { StyleSheet, View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';
import { FeastiaryInput, FeastiaryButton } from '../../components';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FontSizes } from '../../styles/globalStyles';

const RegisterScreen = ({ OnBackToAuth }) => {
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
        console.log('Profile updated!');
        navigation.navigate('HubScreen');
    })
    .catch((error) => {
        alert(error.message);
    });
};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
            <FeastiaryInput 
                Placeholder="Enter your name" 
                Label="Name" 
                LeftIcon={{ type: 'material', name: 'person' }} 
                Value={name} 
                OnChangeText={setName} 
            />

            <FeastiaryInput 
                Placeholder="Enter your email" 
                Label="Email" 
                LeftIcon={{ type: 'material', name: 'email' }} 
                Value={email} 
                OnChangeText={setEmail} 
                KeyboardType="email-address" 
            />

            <FeastiaryInput 
                Placeholder="Enter your password" 
                Label="Password" 
                LeftIcon={{ type: 'material', name: 'lock' }} 
                Value={password} 
                OnChangeText={setPassword} 
                SecureTextEntry={true} 
                KeyboardType="numeric" 
            />

            <View style={styles.buttonContainer}>
            <FeastiaryButton
                TitleStyle={styles.buttonText}
                Title="Register"
                OnPress={registerUser}
            />

            <FeastiaryButton
                TitleStyle={styles.buttonText}
                Title="Back to Authentication"
                OnPress={OnBackToAuth}
            />
            </View>
        </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'column',
        gap: 16,
    },
    buttonText: {
        fontSize: FontSizes.large,
        color: 'black',
        fontWeight: '600',
    },
});

export default RegisterScreen;
