import {Button, Text, View} from "react-native";

function Home({navigation}) {
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

export default Home