import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import logo from '../assets/calculator.png';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
            <Image source={logo} style={styles.innerImage}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inner: {
        width: 100,
        height: 100,
        backgroundColor: 'inherit'
    },
    innerImage: {
        width: 100,
        height: 100
    }
})

export default IntroScreen