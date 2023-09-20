import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

// Importações de bibliotecas e componentes necessários

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IssLocation" screenOptions={{
        headerShown: false
      }}>
        {/* Configuração do navegador de pilha (Stack Navigator) */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={IssLocationScreen} />
        <Stack.Screen name="Meteors" component={MeteorScreen} />
        <Stack.Screen name="Updates" component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Componente principal do aplicativo

export default App;
