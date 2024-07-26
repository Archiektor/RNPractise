import {useState} from 'react'
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {GoalItem} from './components/goalItem';
import CustomButton from './components/customButton';
import GoalInput from './components/goalInput';

export default function App() {
    const [goal, setGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);


    const goalInputHandler = (text) => {
        //console.log(text);
        setGoal(text);
    }

    const goalAddHandler = () => {
        if (goal.trim().length === 0) return; // Prevent adding empty goals
        setCourseGoals(currentGoals => [...currentGoals, goal]);
        setGoal(''); // Clear the input after adding the goal
    }

    return (<View style={styles.appContainer}>
        <View style={styles.upperContainer}>
            <GoalInput goal={goal} goalInputHandler={goalInputHandler}/>
            <CustomButton clickHandler={goalAddHandler}/>
        </View>
        <View style={styles.downContainer}>
            {courseGoals.length > 0 ? (
                <FlatList
                    data={courseGoals}
                    renderItem={itemData => (<GoalItem itemData={itemData}/>)}
                    // if we have item like obj {text: 'bla-bla', id: '343s-45aa-67ff'}
                    // we can extract key by return item.id
                    keyExtractor={(item, index) => index.toString()}
                />
            ) : (
                <View><Text style={styles.dummyItem}>No goals added yet.</Text></View>
            )}
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
        paddingTop: 35, paddingHorizontal: 12, backgroundColor: '#cccccc', flex: 1,
    },
    upperContainer: {
        flexDirection: 'row', justifyContent: 'space-between', flex: 1, // borderStyle: 'solid',
        // borderColor: '#007AFF',
        // borderWidth: 1,
        gap: 12, marginBottom: 12, borderBottomWidth: 1,
    },
    downContainer: {
        flex: 6,
    }
});
