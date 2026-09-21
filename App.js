import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './telas/Home';
import MinhaAtividade from './telas/MinhaAtividade';
import MeuTreino from './telas/MeuTreino';
import Musica from './telas/Musica';
import Dispositivos from './telas/Dispositivos';
import Historico from './telas/Historico';
import Metas from './telas/Metas';
import Perfil from './telas/Perfil';
import Configuracoes from './telas/Configuracoes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MinhaAtividade" component={MinhaAtividade} />
        <Stack.Screen name="MeuTreino" component={MeuTreino} />
        <Stack.Screen name="Musica" component={Musica} />
        <Stack.Screen name="Dispositivos" component={Dispositivos} />
        <Stack.Screen name="Historico" component={Historico} />
        <Stack.Screen name="Metas" component={Metas} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}