import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FeastiaryButton } from '../../components';
import TopNav from '../../components/hub/TopNav';
import BottomNav from '../../components/hub/BottomNav';
import ProfileScreen from '../profile/ProfileScreen';
import FoodLog from '../log/FoodLog';

const HubScreen = ({ OnSignOut }) => {
  const [title, setTitle] = useState('Food Log');

  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const renderContent = () => {
    switch (title) {
      case 'Profile':
        return <ProfileScreen OnSignOut={OnSignOut} />;

      case 'Food Log':
        return <FoodLog />;

      // Add more cases as your hub grows:
      // case 'Settings':
      //   return <SettingsScreen />;

      default:
        return (
          <>
            <Text style={styles.heading}>Welcome to the Hub</Text>
            <Text style={styles.subheading}>Explore the latest features and updates</Text>
            <FeastiaryButton
              Title="Go to Features"
              OnPress={() => console.log('Navigate to Features')}
            />
            <FeastiaryButton
              Title="Settings"
              OnPress={() => console.log('Navigate to Settings')}
            />
          </>
        );
    }
  };

  return (
    <View style={styles.container}>
      <TopNav Title={title} />
      <View style={styles.content}>{renderContent()}</View>
      <BottomNav ChangeTitle={changeTitle} />
    </View>
  );
};

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
