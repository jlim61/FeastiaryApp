import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';
import { FeastiaryButton, FeastiaryText } from '../../components';
import { FontSizes, Colors, Typography } from '../../styles/globalStyles';
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
                    <FeastiaryText Style={Typography.BrandTitleText}>feastiary</FeastiaryText>

                    <View style={styles.buttonContainer}>
                        <FeastiaryButton
                            TitleStyle={Typography.LargeButtonText}
                            Title="Login"
                            OnPress={GoToLogin}
                        />
                        <FeastiaryButton
                            TitleStyle={Typography.LargeButtonText}
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
});

export default AuthScreen;
