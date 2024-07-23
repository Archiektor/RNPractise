import {useState} from 'react'
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function App() {
    const [goal, setGoal] = useState('');
    const [arr, setArr] = useState([]);


    const goalInputHandler = (text) => {
        //console.log(text);
        setGoal(text);
    }

    const goalAddHandler = () => {
        setArr((currentGoals) => [...currentGoals, goal]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.upperContainer}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder={'Your course goal!'} style={styles.input} onChangeText={goalInputHandler}/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.btn} onPress={goalAddHandler}>
                        <Text style={styles.btnText}>Add Goal</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.downContainer}>
                {arr.length > 0 ? (
                    <FlatList
                        data={arr}
                        renderItem={({item}) => <Text style={styles.dummyText}>{item}</Text>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                ) : (
                    <Text style={styles.dummyText}>No goals added yet.</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 35,
        paddingHorizontal: 12,
        backgroundColor: '#cccccc',
        flex: 1,
    },
    upperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        // borderStyle: 'solid',
        // borderColor: '#007AFF',
        // borderWidth: 1,
        gap: 12,
        marginBottom: 12,
        borderBottomWidth: 1,
    },
    inputContainer: {
        flex: 6,
        height: '100%',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 4,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    downContainer: {
        flex: 6,
    },
    input: {
        width: 'auto',
        borderColor: '#007AFF',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    dummyText: {
        fontSize: 22,
        fontWeight: '600',
    },
    btn: {
        width: '100%',
        backgroundColor: 'rgba(35,116,237,0.9)',
        paddingVertical: 10,
        paddingHorizontal: 22,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
