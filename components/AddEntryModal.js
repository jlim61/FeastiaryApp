import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Modal, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Icon } from "react-native-elements";
import { Colors, Layout, Typography } from '../styles/globalStyles';
import FeastiaryText from './FeastiaryText';
import { FontAwesome6 } from '@expo/vector-icons';
import FeastiaryInput from './FeastiaryInput';
import FeastiaryDateTimePicker from './FeastiaryDateTimePicker';

const AddEntryModal = ({ Visible, OnClose, OnSave }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [visitDate, setVisitDate] = useState(null);

    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={[Visible ? styles.backdrop : styles.hidden]}>
            <Modal transparent visible={Visible} animationType="slide">
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Pressable style={StyleSheet.absoluteFill} onPress={Keyboard.dismiss} />
                        <View style={Layout.ColumnGap32Px}>
                            <View style={[Layout.Row, Layout.JustifyContentBetween, Layout.AlignItemsCenter]}>
                                <Pressable onPress={OnClose} android_ripple={{ color: 'transparent' }}>
                                    <FontAwesome6 name="arrow-left" color="white" size="28" />
                                </Pressable>
                                <FeastiaryText Style={Typography.LargeButtonText}>Entry</FeastiaryText>
                                <Pressable onPress={OnSave} android_ripple={{ color: 'transparent' }}>
                                    <FontAwesome6 name="circle-check" color="white" size="28" />
                                </Pressable>
                            </View>
                            <View style={Layout.ColumnGap16Px}>
                                <FeastiaryText Style={Typography.BlackLargeText}>Restaurant</FeastiaryText>
                                <FeastiaryInput Placeholder={name?.trim() ? "" : "Name"} Label={name?.trim() ? "Name" : ""} Value={name} OnChangeText={setName} />
                                <FeastiaryInput Placeholder={location?.trim() ? "" : "Location"} Label={location?.trim() ? "Location" : ""} Value={location} OnChangeText={setLocation} />
                                <FeastiaryText Style={Typography.BlackLargeText}>Visit Date</FeastiaryText>
                                <FeastiaryDateTimePicker
                                    Placeholder="MM/DD/YYYY"
                                    Value={visitDate}
                                    OnChange={setVisitDate}
                                    Mode="date"
                                    MinimumDate={new Date(1900, 0, 1)}
                                    MaximumDate={new Date(2100, 0, 1)}
                                    FormatOptions={{ year: "numeric", month: "2-digit", day: "2-digit" }}
                                />
                                <FeastiaryText Style={Typography.BlackLargeText}>Rating</FeastiaryText>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
        // </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.35)',
    },
    hidden: {
        display: 'none'
    },
    container: {
        height: '80%',
        width: '95%',
        backgroundColor: Colors.brand,
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
        position: 'absolute',
        bottom: 0,
        padding: 24,
    },
    RowGap32Px: {
        rowGap: 32  
    },
    test: {
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default AddEntryModal;