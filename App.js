import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

// MatchScreen
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Image } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Matches"
        onPress={() => navigation.navigate('Matches')}
      />
    </View>
  );
}

function MatchScreen() {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'MatchOne',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人"

        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'MatchTwo',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'MatchThree',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d70',
            title: 'MatchThree',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d71',
            title: 'MatchThree',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            title: 'MatchThree',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d75',
            title: 'MatchThree',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            title: 'MatchThree',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人"
        }
    ];

    const renderItem = ({ item }) => (
        <View style={styles.flatlist}>
            <View style={{flex: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    style={{
                        alignSelf: 'center',
                        height: 75,
                        width: 75,
                        marginLeft: 5,
                        borderRadius: 5
                    }}
                    source={require("./assets/random.png")}
                />
                <Text>{"Random"}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.title}>{item.location}</Text>
                <Text style={styles.title}>{item.size}</Text>
                <Text style={styles.time}>{item.date}</Text>
                <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={{flex: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    style={{
                        alignSelf: 'center',
                        height: 75,
                        width: 75,
                        marginRight: 5,
                        borderRadius: 5
                    }}
                    source={require("./assets/random.png")}
                />
                <Text>{"Random"}</Text>
            </View>

        </View>
    );

  return (
      <SafeAreaView style={styles.container}>
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />
      </SafeAreaView>
  );
}

function PreMatchScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Preparation</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Matches" component={MatchScreen}/>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Preparation" component={PreMatchScreen}/>
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Matches" component={MatchScreen} />
        <Stack.Screen name="Preparation" component={PreMatchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: "center",
        backgroundColor: 'white'

    },
    flatlist: {
        backgroundColor: 'pink',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
        textAlign: "center"
    },
    time: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: "monospace"
    }
});

export default App;