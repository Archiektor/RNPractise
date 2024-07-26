import {StyleSheet, Text, TextInput, View} from 'react-native';

const goalInput = ({goal, goalInputHandler}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput value={goal} placeholder={'Your course goal!'} style={styles.input} onChangeText={goalInputHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 6, height: '100%', justifyContent: 'center',
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
    }
});

export default goalInput
