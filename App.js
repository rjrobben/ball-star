import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {Match, Home, PreMatch} from './src/views'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Matches" component={Match}/>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Preparation" component={PreMatch}/>
        </Tab.Navigator>
    );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="HomeTab"
            component={HomeTab}
            options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Matches" component={Match} />
        <Stack.Screen name="Preparation" component={PreMatch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;