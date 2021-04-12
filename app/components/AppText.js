import React from 'react';
import {Text, StyleSheet, } from 'react-native';

import ColorPalette from '../config/ColorPalette';

function AppText({children, color = "beige"}) {
    return (
        <Text style = {[styles.text, {color: ColorPalette[color]}]}>
           {children} 
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: 'monospace',
    }
})

export default AppText;