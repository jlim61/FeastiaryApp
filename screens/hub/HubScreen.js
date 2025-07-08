import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FeastiaryButton } from '../../components';
import TopNav from '../../components/hub/TopNav';
import BottomNav from '../../components/hub/BottomNav';
import ProfileScreen from '../profile/ProfileScreen';

const HubScreen = ({ OnSignOut }) => {
    const [title, setTitle] = useState('Food Log');
    const changeTitle = (newTitle) => {
        setTitle(newTitle);
    };

    return (
        <View style={styles.container}>
            <TopNav Title={title} />
            <View style={styles.content}>
                {title === 'Profile' ? (
                    <ProfileScreen OnSignOut={OnSignOut} />
                ) : (
                    <>
                        <Text>Welcome to the Hub</Text>
                        <Text>Explore the latest features and updates</Text>
                        <FeastiaryButton Title="Go to Features" OnPress={() => console.log('Navigate to Features')} />
                        <FeastiaryButton Title="Settings" OnPress={() => console.log('Navigate to Settings')} />
                    </>
                )}
            </View>
            <BottomNav ChangeTitle={changeTitle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HubScreen;
