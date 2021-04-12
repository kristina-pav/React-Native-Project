import React from 'react';
import { View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import ColorPalette from '../config/ColorPalette';
import ErrorMessage from '../components/ErrorMessage';


const schema = Yup.object().shape( {
    username: Yup.string().required().label("Username"),
    password: Yup.string().min(6).required().label("Password"),

});

function LoginScreen(props) {

    return (
        <AppScreen>
            <View style = {styles.container}>
                <View style = {styles.icon}>
                    <MaterialCommunityIcons 
                        name = "crown"
                        size = {140}
                        color = {ColorPalette.darkGreen}/>
                </View>
                <Formik 
                    initialValues = {{username: '', password: '',}}
                    onSubmit = {values => console.log(values)}
                    validationSchema = {schema}
                    >
                    {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                        <>
                        <View style = {styles.textInput}>
                            <AppTextInput 
                                icon = "account" 
                                placeholder = "Username"
                                onBlur = {() => setFieldTouched("username")}
                                onChangeText = {handleChange("username")}/>  
                            {touched.username && <ErrorMessage>{errors.username}</ErrorMessage>}
                            <AppTextInput 
                                icon = "key-variant" 
                                placeholder = "Password" 
                                secureTextEntry = {true}
                                onBlur = {() => setFieldTouched("password")}
                                onChangeText = {handleChange("password")}/>  
                            {touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                        </View>
                        <View style = {styles.loginButton}>
                            <AppButton title = "Sign in" color = "darkGreen" onPress = {handleSubmit} />
                        </View> 
                        </>
                    )}
                </Formik>
            </View> 
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorPalette.beige,
    },
    icon: {
        marginLeft: 140,
        marginTop: 80,
    },
    textInput: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        height: 180,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    loginButton: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 70,
    }
})

export default LoginScreen;