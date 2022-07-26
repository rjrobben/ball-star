import {Text, View, TouchableOpacity, StyleSheet, button} from "react-native";

function MatchDetail({ route, navigation }) {
    const { item } = route.params;

    return (
        <View style={{ flex: 1, 
                       alignItems: 'flex-start', 
                       justifyContent: 'flex-start',
                       padding: 10,
                       backgroundColor: 'rgba(255,255,255,0.5)',
                       
                       }}>
            <Text>比賽資料: </Text>
            <Text>比賽: {item.title}</Text>
            <Text>地區: {item.district}</Text>
            <Text>球場位置: {item.location}</Text>
            <Text>球場大小: {item.size}</Text>
            <Text>比賽日期: {item.date}</Text>
            <Text>比賽時間: {item.time}</Text>
            <Text>現時人數: {item.participant}</Text>

            {/* add a button to allow joining a match */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home", {item: item })}>
                <Text>加入比賽</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default MatchDetail