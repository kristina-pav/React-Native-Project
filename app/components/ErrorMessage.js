import React from 'react';
import {Text, StyleSheet, } from 'react-native';

import ColorPalette from '../config/ColorPalette';

function ErrorMessage({children, color = "red"}) {
    return (
        <Text style = {[styles.text, {color: ColorPalette[color]}]}>
           {children} 
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 10,
        fontFamily: 'monospace',
    }
})

export default ErrorMessage;