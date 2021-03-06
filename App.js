import 'react-native-gesture-handler';
import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
// react navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from './view/inicio';
import Nosotros from './view/nosotros';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#F4511E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{
            title: 'Componente Principal',
          }}
        />
        <Stack.Screen
          name="Nosotros"
          component={Nosotros}
          options={({route}) => ({
            title: route.params.clientId,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
