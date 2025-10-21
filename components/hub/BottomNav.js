import React, { useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Colors } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNav = ({ ChangeTitle }) => {
    const [activeTab, setActiveTab] = useState('foodLog');

    const setNewActiveTab = (tab) => {
        setActiveTab(tab);

        switch (tab) {
            case 'foodLog':
                ChangeTitle('Food Log');
                break;
            case 'rankings':
                ChangeTitle('Rankings');
                break;
            case 'bookmarks':
                ChangeTitle('Bookmarks');
                break;
            case 'profile':
                ChangeTitle('Profile');
                break;
            default:
                break;
        }
    };

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => setNewActiveTab('foodLog')}
                android_ripple={{ color: 'transparent' }}  // Disable ripple effect on Android
            >
                <FontAwesome
                    name="calendar"
                    size={30}
                    color={activeTab === 'foodLog' ? Colors.activeTab : 'white'}
                />
            </Pressable>

            <Pressable
                onPress={() => setNewActiveTab('rankings')}
                style={{ transform: [{ scaleX: -1 }] }}  // Flipping the icon horizontally
                android_ripple={{ color: 'transparent' }}  // Disable ripple effect
            >
                <Icon
                    name="message-star"
                    size={30}
                    color={activeTab === 'rankings' ? Colors.activeTab : 'white'}
                />
            </Pressable>

            <Pressable
                onPress={() => setNewActiveTab('bookmarks')}
                android_ripple={{ color: 'transparent' }}  // Disable ripple effect
            >
                <Ionicons
                    name="bookmark"
                    size={30}
                    color={activeTab === 'bookmarks' ? Colors.activeTab : 'white'}
                />
            </Pressable>

            <Pressable
                onPress={() => setNewActiveTab('profile')}
                android_ripple={{ color: 'transparent' }}  // Disable ripple effect
            >
                <FontAwesome6
                    name="user-large"
                    size={30}
                    color={activeTab === 'profile' ? Colors.activeTab : 'white'}
                />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 92,
        width: '100%',
        backgroundColor: Colors.brand,
    },
});

export default BottomNav;
