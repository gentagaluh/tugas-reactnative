import React from 'react';

import login from "./components/Pages/login";
import register from './components/Pages/register'
import portofolio from './components/Pages/portofolio'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Register" component={register} />
        <Stack.Screen name="Portofolio" component={portofolio} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;