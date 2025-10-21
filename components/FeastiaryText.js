import { View, Text, StyleSheet } from 'react-native';
import { FontFamilies } from '../styles/globalStyles'; 

const FeastiaryText = ({ children, Style }) => {
    return (
        <View>
            <Text style={[styles.defaultText, Style]}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    defaultText: {
        fontFamily: FontFamilies.regular,
    },
});

export default FeastiaryText;