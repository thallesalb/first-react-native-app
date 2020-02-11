import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Home extends Component {
    render() {

        const { navigation } = this.props
        const nomeUsuario = navigation.getParam('nome')

        return (
            <View style={styles.container}>
                <Text style={styles.texto}>Olá { nomeUsuario} !!!</Text>
                <Text style={styles.texto}> Esse é seu perfil </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7f8c8d',
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
