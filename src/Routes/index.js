import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../Login';
import Cadastrar from '../Cadastrar';
import Lista from '../Lista';
import Home from '../Home';

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Login"
                drawerContentOptions={{
                    activeTintColor: '#ff5555'
                }}
            >
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Cadastrar" component={Cadastrar} />
                <Drawer.Screen name="Lista" component={Lista} />
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}