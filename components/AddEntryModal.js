import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { Colors, Layout } from '../styles/globalStyles';
import FeastiaryText from './FeastiaryText';
import FeastiaryButton from './FeastiaryButton';

const AddEntryModal = ({ Visible, OnClose }) => {
    console.log('[AddEntryModal] visible =', Visible);

    return (
        <View style={[Visible ? styles.backdrop : styles.hidden]}>
            <Modal transparent visible={Visible} animationType="slide">
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <View style={[Layout.Row, Layout.JustifyContentBetween, Layout.AlignItemsCenter]}>
                            <FeastiaryButton Title="Cancel" OnPress={OnClose} />
                            <FeastiaryText>Entry</FeastiaryText>
                            <FeastiaryText>Save</FeastiaryText>
                        </View>
                        <View style={Layout.Column}>
                            <FeastiaryText>Restaurant</FeastiaryText>
                            <FeastiaryText>Visit Date</FeastiaryText>
                            <FeastiaryText>Rating</FeastiaryText>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
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
        height: '65%',
        width: '95%',
        // backgroundColor: 'red',
        backgroundColor: Colors.brand,
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
        position: 'absolute',
        bottom: 0,
        padding: 12,
    }
});

export default AddEntryModal;