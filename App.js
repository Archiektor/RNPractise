import {useState} from 'react'
import {Button, FlatList, StyleSheet, View} from 'react-native';
import {GoalItem} from './components/goalItem';
import GoalInput from './components/goalInput';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    }

    const goalAddHandler = (goal) => {
        if (goal.trim().length === 0) return; // Prevent adding empty goals
        setCourseGoals(currentGoals => [...currentGoals, goal]);
    }

    const goalDeleteHandler = (itemToDelete) => {
        setCourseGoals(currentGoals => currentGoals.filter(g => g !== itemToDelete));
    }

    const closeModalHandler = () => {
        setModalIsVisible(false);
    }

    return (<View style={styles.appContainer}>
        <Button title={'Add New Goal'} color={'#6245b6'} onPress={startAddGoalHandler}/>
        <View style={styles.upperContainer}>
            <GoalInput isVisible={modalIsVisible} goalAddHandler={goalAddHandler} closeModalHandler={closeModalHandler}/>
        </View>
        <View style={styles.downContainer}>
            <FlatList
                data={courseGoals}
                renderItem={itemData => (<GoalItem itemData={itemData} deleteItemHandler={goalDeleteHandler}/>)}
                // if we have item like obj {text: 'bla-bla', id: '343s-45aa-67ff'}
                // we can extract key by return item.id
                keyExtractor={(item, index) => index.toString()}
            />
            {/*{courseGoals.length > 0 ? (*/}
            {/*    <ScrollView>*/}
            {/*        {courseGoals.map((goal, idx) => (*/}
            {/*            <View key={idx} style={styles.dummyItem}>*/}
            {/*                <Text style={styles.dummyText}>{goal}</Text>*/}
            {/*            </View>*/}
            {/*        ))}*/}
            {/*    </ScrollView>*/}
            {/*) : (*/}
            {/*    <View>*/}
            {/*        <Text style={styles.dummyItem}>No goals added yet.</Text>*/}
            {/*    </View>*/}
            {/*)}*/}
        </View>
    </View>);
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 35,
        paddingHorizontal: 12,
        backgroundColor: '#cccccc',
    },
    upperContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    downContainer: {
        flex: 6,
    }
});
