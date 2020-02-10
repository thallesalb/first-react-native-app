import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>WELCOME! Your Home Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0066cc',
        alignItems: 'center'
      },
      texto: {
        marginTop: 16,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 5
      }
})
