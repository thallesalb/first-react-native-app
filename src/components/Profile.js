import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class HomeDrawer extends Component {

    static navigationOptions = {
        drawerLabel: 'Profile'
    }

    render() {
        return (
            <View>
                <Image
                    source={require('../assets/react_native_logo.png')}
                    style={styles.logo}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2c3e50",
        justifyContent: 'center',
        alignContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    }
})