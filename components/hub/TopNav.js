import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors, FontSizes, FontWeights } from '../../styles/globalStyles';
import FeastiaryText from '../FeastiaryText';

const TopNav = ({ Title }) => {

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Pressable
                    onPress={() => console.log('Bars icon pressed')}
                    android_ripple={{ color: 'transparent' }}  // Disable ripple effect
                >
                    <FontAwesome6 name="bars" size={30} color="white" />
                </Pressable>

                <Pressable
                    onPress={() => console.log('Plus icon pressed')}
                    android_ripple={{ color: 'transparent' }}  // Disable ripple effect
                >
                    <FontAwesome6 name="circle-plus" size={30} color="white" />
                </Pressable>
            </View>

            <View style={styles.titleContainer}>
                <FeastiaryText Style={styles.title}>{Title}</FeastiaryText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 8,
        height: 92,
        width: '100%',
        backgroundColor: Colors.brand,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: FontSizes.large,
        fontWeight: FontWeights.semiBold,
    },
});

export default TopNav;
