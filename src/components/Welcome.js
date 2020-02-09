import React, { Component } from 'react'
import { View , Text} from 'react-native'
import styles from '../styles/Index'

export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>
                    {this.props.titulo}
                </Text>
                <Text style={styles.slogan}>
                    {this.props.slogan}
                </Text>
            </View>
        )
    }
}
