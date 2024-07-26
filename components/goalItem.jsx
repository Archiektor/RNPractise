import {StyleSheet, Text, View} from 'react-native';

export const GoalItem = ({itemData}) => {
    return (<View style={styles.dummyItem}><Text style={styles.dummyText}>{itemData.item}</Text></View>)
}

const styles = StyleSheet.create({
    dummyItem: {
        backgroundColor: '#f9f9f9',
        padding: 7,
        marginVertical: 6,
        marginHorizontal: 16,
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    }, dummyText: {
        color: '#333', fontSize: 18, fontWeight: '600', textAlign: 'center',
    }
});