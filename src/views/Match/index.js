import {FlatList, TouchableOpacity, Image, SafeAreaView, StyleSheet, Text, View} from "react-native";

function Match({navigation}) {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'MatchOne',
            district: '元朗',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人",
            participant: '13/14'

        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'MatchTwo',
            district: '元朗',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人",
            participant: '13/14'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'MatchThree',
            district: '元朗',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人",
            participant: '13/14'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d70',
            title: 'MatchThree',
            district: '元朗',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人",
            participant: '13/14'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d71',
            title: 'MatchThree',
            district: '元朗',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人",
            participant: '13/14'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            title: 'MatchThree',
            district: '元朗',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人",
            participant: '13/14'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d75',
            title: 'MatchThree',
            district: '元朗',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人",
            participant: '13/14'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            title: 'MatchThree',
            district: '元朗',
            location: '天耀足球場',
            date: '2022/06/30',
            time: '17:00-19:00',
            size: "七人",
            participant: '13/14'
        }
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate("MatchDetail")}
            >
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
                        source={require("../../../assets/random.png")}
                    />
                    <Text>{"Random"}</Text>

                </View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.title}>{item.district}</Text>
                    <Text style={styles.title}>{item.location}</Text>
                    <Text style={styles.title}>{item.size}</Text>
                    <Text style={styles.time}>{item.date}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.title}>{item.participant}</Text>
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
                        source={require("../../../assets/random.png")}
                    />
                    <Text>{"Random"}</Text>
                </View>

            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate("CreateMatch")}
                style={styles.fab}>
                <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
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
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    }
});

export default Match