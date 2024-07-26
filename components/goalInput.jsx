import {useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';

const GoalInput = ({goalAddHandler, isVisible, closeModalHandler}) => {
    const [goal, setGoal] = useState('');

    const goalInputHandler = (text) => {
        setGoal(text);
    }

    const addGoalHandler = () => {
        goalAddHandler(goal);
        setGoal(''); // Clear the input after adding the goal
    }

    const cancelGoalHandler = () => {
        closeModalHandler();
    }

    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput
                    style={styles.textContainer}
                    value={goal}
                    placeholder="Your course goal!"
                    placeholderTextColor="#a9a9a9"
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.btn, styles.flex2]} onPress={addGoalHandler}>
                        <Text style={styles.btnText}>Add Goal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.flex1, styles.btnCancel]} onPress={closeModalHandler}>
                        <Text style={styles.btnText}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        padding: 20,
    },
    textContainer: {
        minWidth: '80%',
        borderColor: '#007AFF',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 14,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
    },
    btn: {
        backgroundColor: '#1E90FF',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    btnCancel: {
        backgroundColor: '#FF6347',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    flex2: {
        flex: 2,
        marginRight: 10,
    },
    flex1: {
        flex: 1,
    },
    image: {
        width: 128,
        height: 128,
        marginBottom: 12,
    }
});

export default GoalInput;
