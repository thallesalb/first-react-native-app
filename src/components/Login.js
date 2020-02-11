import React, { Component } from 'react'
import { Alert, View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/Login'

export default class Login extends Component {

    clicou = () => {
        Alert.alert("Ihuuu", "Fui Clicado")
    }

    state = {
        nome: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/react_native_logo.png')}
                    style={styles.logo}
                />

                <TextInput
                    placeholder="Digite seu email"
                    onChangeText={ text => this.state.nome = text }
                    style={styles.input}
                />

                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => { this.props.navigation.navigate('Home', {'nome': this.state.nome}) }}
                >
                    <Text style={styles.textoBotao}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
