import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {Match, Home, PreMatch, CreateMatch, MatchDetail} from './src/views'

const Tab = createBottomTabNavigator();
const MatchStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

function MatchStackScreen() {
  return (
    <MatchStack.Navigator>
      <MatchStack.Screen name="Match" component={Match} />
      <MatchStack.Screen name="MatchDetail" component={MatchDetail}/>
      <MatchStack.Screen name="CreateMatch" component={CreateMatch}/>
    </MatchStack.Navigator>
  )
}

function HomeTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen options={{headerShown: false}} name="Matches" component={MatchStackScreen}/>
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
        <Stack.Screen name="CreateMatch"  component={CreateMatch} />
        <Stack.Screen name="MatchDetail" component={MatchDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;