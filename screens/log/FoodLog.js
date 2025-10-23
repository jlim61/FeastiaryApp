import { StyleSheet, View } from 'react-native';
import { FeastiaryButton } from '../../components';
import { Spacing, Typography } from '../../styles/globalStyles';
import DinoBookLogo from '../../assets/images/DinoBookLogo.svg';


const FoodLog = ({ OpenEntryModal }) => {

    return (
        <View style={styles.container}>
            <FeastiaryButton TitleStyle={Typography.SmallButtonText} Title="Start adding to your log!" OnPress={OpenEntryModal} />
            <View style={styles.logoBox}>
                <DinoBookLogo width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ transform: [{ scale: 1.4 }, { translateY: -26 }, { translateX: 5 }, ] }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        rowGap: Spacing.medium
    },
    logoBox: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -1,
        // use the below to help visualize the icon space if needed
        // borderWidth: 2,
        // borderColor: '#888',
        // borderRadius: 12,
        // backgroundColor: 'rgba(0,0,0,0.03)', // optional: helps visualize box
  },
});

export default FoodLog;
