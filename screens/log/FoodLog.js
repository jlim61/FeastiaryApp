import { StyleSheet, View } from 'react-native';
import { FeastiaryButton } from '../../components';

const FoodLog = () => {

    return (
        <View style={styles.container}>
            <FeastiaryButton
                Title="Start adding to your log!"
                OnPress={() => console.log('Add to log clicked')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FoodLog;
