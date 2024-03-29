import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import Constants from 'expo-constants';

function AppScreen({children}) {
    return (
        <SafeAreaView style = {styles.screen}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    }
})

export default AppScreen;