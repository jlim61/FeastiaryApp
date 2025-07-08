// ProfileScreen.js
import { StyleSheet, View } from 'react-native';
import { FeastiaryButton } from '../../components';
import { Colors } from '../../styles/globalStyles';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const ProfileScreen = ({ OnSignOut }) => {
    const SignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out');
            })
            .catch((error) => {
                alert(`Sign out error: ${error.message}`);
            });
    };

    return (
        <View style={styles.container}>
            <FeastiaryButton Title="Sign Out" OnPress={SignOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Brand,
    },
});

export default ProfileScreen;
