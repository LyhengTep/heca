import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/home';
import WelcomeScreen from '../screens/Welcome/welcom';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
