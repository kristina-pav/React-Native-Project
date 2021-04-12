import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

import AppText from './AppText';
import ColorPalette from '../config/ColorPalette';

function AppButton({title, color = "green", onPress}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style = {[styles.button, {backgroundColor: ColorPalette[color]}]}>
                <AppText> {title} </AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 50,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default AppButton;
