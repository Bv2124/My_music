import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import Login_page from './Initialpages/Login_page';
import Home_Page from './Initialpages/Home_Page';
import Lists from './Initialpages/Lists';
const Stack = createStackNavigator();



function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login_page' screenOptions={{ headerBackTitle:"text" }}>
                <Stack.Screen name="Login_page" component={Login_page} />
                <Stack.Screen name="Home_Page" component={Home_Page} />
                <Stack.Screen name="Lists" component={Lists} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
