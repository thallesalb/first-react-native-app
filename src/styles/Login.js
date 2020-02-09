import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0066cc',
      justifyContent: 'center',
      alignItems: 'center'
    },
    botao: {
      backgroundColor: '#fff',
      width: 300,
      alignItems: 'center',
      alignContent: 'center',
      padding: 10,
      marginTop: 16,
      borderRadius: 5,
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 50,
        padding: 20
    },
    input: {
        marginTop: 16,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 5
    },
    textoBotao: {
        fontSize: 16,
        color: '#0066cc',
        fontWeight: 'bold'
    }
  })

export default styles