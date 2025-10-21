import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';
import { FeastiaryButton, FeastiaryText } from '../../components';
import { FontSizes, Colors } from '../../styles/globalStyles';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const AuthScreen = () => {
    const [isAuthScreen, setIsAuthScreen] = useState(true);
    const [newUserStatus, setNewUserStatus] = useState(false);

const GoToLogin = () => {
    setIsAuthScreen(false);
    setNewUserStatus(false);
};

const GoToRegister = () => {
    setIsAuthScreen(false);
    setNewUserStatus(true);
};

const GoToAuth = () => {
    setIsAuthScreen(true);
    setNewUserStatus(false);
};

return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                {isAuthScreen ? (
                <View style={styles.authContainer}>
                    <FeastiaryText Style={styles.titleText}>feastiary</FeastiaryText>

                    <View style={styles.buttonContainer}>
                    <FeastiaryButton
                        TitleStyle={styles.buttonText}
                        Title="Login"
                        OnPress={GoToLogin}
                    />
                    <FeastiaryButton
                        TitleStyle={styles.buttonText}
                        Title="Register"
                        OnPress={GoToRegister}
                    />
                    </View>
                </View>
                ) : !newUserStatus ? (
                <LoginScreen OnBackToAuth={GoToAuth} />
                ) : (
                <RegisterScreen OnBackToAuth={GoToAuth} />
                )}
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
    authContainer: {
        flexDirection: 'column',
        gap: 200,
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
    titleText: {
        fontSize: FontSizes.title,
        color: Colors.title,
        fontWeight: '600',
    },
});

export default AuthScreen;
