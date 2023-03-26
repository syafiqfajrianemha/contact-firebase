import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailKontak, EditKontak, Home, TambahKontak} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Tambah Kontak" component={TambahKontak} />
        <Stack.Screen name="Detail Kontak" component={DetailKontak} />
        <Stack.Screen name="Edit Kontak" component={EditKontak} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
