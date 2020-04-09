import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/Login';
import Cadastrar from './src/Cadastrar';
import Lista from './src/Lista';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Cadastrar"
        drawerContentOptions={{
          activeTintColor: '#ff5555'
        }}
      >
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastrar" component={Cadastrar} />
        <Drawer.Screen name="Lista" component={Lista} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}