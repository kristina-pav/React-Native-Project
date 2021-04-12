import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppScreen from '../components/AppScreen';
import ColorPalette from '../config/ColorPalette';

const blurValue = 0.5;

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
              <ImageBackground
                source = {require("../assets/background-image.jpg")}
                style = {styles.container}
                blurRadius = {blurValue}>
                    <View style = {styles.iconView}>
                        <MaterialCommunityIcons 
                        name = "crown"
                        size = {50}
                        color = {ColorPalette.lightGreen}/>
                        <AppText> Travel King </AppText> 
                    </View>
                    <View style = {styles.buttonView}>
                        <AppButton 
                            title = "Login" 
                            onPress = {() => navigation.navigate("Login")}>
                        </AppButton>
                        <AppButton 
                            title = "Register" 
                            color = "otherGreen" 
                            onPress = {() => navigation.navigate("Register")}> 
                        </AppButton>
                    </View>
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    iconView: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonView: {
        marginTop: 420,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: 180,
    }
})

export default WelcomeScreen;

