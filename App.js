import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from './screens/authorization/AuthScreen';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import HubScreen from './screens/hub/HubScreen';

const Stack = createStackNavigator();
export default function App() {
    
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
        setIsLoggedIn(true);
    } else {
        setIsLoggedIn(false);
    }
        setLoading(false);
    });

    
    return () => unsubscribe();
  }, []);

  
  return (
    <NavigationContainer>
        <Stack.Navigator>
            {isLoggedIn ? (
                <Stack.Screen name="Hub" component={HubScreen} OnSignOut={() => setIsLoggedIn(false)} />
            ) : (
                <Stack.Screen name="Auth" component={AuthScreen} />
            )}
        </Stack.Navigator>
    </NavigationContainer>
  );
}