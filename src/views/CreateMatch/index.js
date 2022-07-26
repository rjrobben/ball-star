import {Text, SafeAreaView, StyleSheet, View, TextInput} from "react-native";

function CreateMatch() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "flex-start",

            }}>
            <Text>Create Match Page</Text>
            <TextInput
                style={styles.input}
                placeholder="比賽名稱"
                /> 
            <TextInput
                style={styles.input}
                placeholder="地區"
                /> 
            <TextInput
                style={styles.input}
                placeholder="球場位置"
                /> 
            <TextInput
                style={styles.input}
                placeholder="比賽日期"
                /> 
            <TextInput
                style={styles.input}
                placeholder="比賽時間"
                /> 
        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CreateMatch