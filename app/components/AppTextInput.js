import React from 'react';
import {TextInput, StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import ColorPalette from '../config/ColorPalette';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style = {styles.container}>
            <TextInput 
            autoCapitalize = 'none'
            style = {styles.text} {...otherProps}/>
            <MaterialCommunityIcons
            name = {icon}
            size = {30}
            color = {ColorPalette.darkGreen}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorPalette.green, 
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
    },
    text: {
        fontSize: 20,
        fontFamily: 'monospace',
        color: ColorPalette.beige,
        width: '90%',
    },
})

export default AppTextInput;