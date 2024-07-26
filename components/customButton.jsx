import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const customButton = ({clickHandler}) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btn} onPress={clickHandler}>
                <Text style={styles.btnText}>Add Goal</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        flex: 4, height: '100%', justifyContent: 'center', alignItems: 'center',
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
    }, btnText: {
        color: '#fff', fontSize: 16, fontWeight: '600',
    },
});


export default customButton
