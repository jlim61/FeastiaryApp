import { StyleSheet, View } from 'react-native';
import { FeastiaryButton } from '../../components';
import { FontSizes, Spacing, FontWeights } from '../../styles/globalStyles';
import DinoBookLogo from '../../assets/images/DinoBookLogo.svg';


const FoodLog = () => {

    return (
        <View style={styles.container}>
            <FeastiaryButton TitleStyle={styles.buttonTitleStyle} Title="Start adding to your log!" ButtonStyle={styles.buttonStyle} OnPress={() => console.log('Add to log clicked')} />
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
        // use the below to help visualize the icon space if needed
        // borderWidth: 2,
        // borderColor: '#888',
        // borderRadius: 12,
        // backgroundColor: 'rgba(0,0,0,0.03)', // optional: helps visualize box
  },
  buttonStyle: {
        height: 54
  },
  buttonTitleStyle: {
        fontSize: FontSizes.regular,
        fontWeight: FontWeights.semiBold,
        color: 'black'
  }
});

export default FoodLog;
