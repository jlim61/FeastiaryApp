import { StyleSheet, View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useState, useEffect } from 'react';
import { FeastiaryInput, FeastiaryButton } from '../../components';
import { FontSizes, Spacing, FontWeights } from '../../styles/globalStyles';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth'; 

const LoginScreen = ({ OnBackToAuth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed in:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
}

return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
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
                        Title="Login"
                        OnPress={signIn}
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
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: Spacing.medium,
    },
    buttonText: {
        fontSize: FontSizes.large,
        color: 'black',
        fontWeight: FontWeights.semiBold,
    },
});

export default LoginScreen;
