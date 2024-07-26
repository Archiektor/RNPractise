import {Pressable, StyleSheet, Text, View} from 'react-native';

export const GoalItem = ({itemData, deleteItemHandler}) => {

    const onDeleteItemHandler = () => {
        //console.log(itemData.item);
        deleteItemHandler(itemData.item);
    }

    return (
        <View style={styles.dummyItem}>
            <Pressable
                android_ripple={{color: '#232222'}}
                onPress={onDeleteItemHandler}
                style={({pressed}) => [
                    styles.pressableItem,
                    pressed && styles.pressedItem
                ]}
            >
                <Text style={styles.dummyText}>{itemData.item}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    dummyItem: {
        backgroundColor: '#f9f9f9',
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
        color: '#333',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        padding: 7,
    }, pressedItem: {
        opacity: 0.6,
        backgroundColor: '#cccccc',
        transform: [{scale: 0.98}],
    },
    pressableItem: {
        borderRadius: 8,
    },
});