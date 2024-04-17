import React from 'react';
import Login from './components/Screen/LoginScreen'
import Register from './components/Screen/RegisterScreen'
import Home from './components/Screen/HomeScreen'
import All from './components/Screen/AllScreen'
import Lunas from './components/Screen/LunasScreen'
import Pending from './components/Screen/PendingScreen'
import Bayar from './components/Screen/BayarScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App =()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="All" component={All} />
        <Stack.Screen name="Lunas" component={Lunas} />
        <Stack.Screen name="Pending" component={Pending} />
        <Stack.Screen name="Bayar" component={Bayar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App