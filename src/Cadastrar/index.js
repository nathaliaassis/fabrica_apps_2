import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableHighlight, Keyboard } from 'react-native';
import firebase from '../dbConnection';

export default class Cadastrar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
        }
        this.cadastrar = this.cadastrar.bind(this);

    }

    cadastrar() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((error) => {
                if (error.code == 'auth/weak-password') {
                    alert('Sua senha deve ter pelo menos 6 caracteres.');
                }
                if (error.code == 'auth/invalid-email') {
                    alert('E-mail inválido.');
                }
            });
        Keyboard.dismiss();
    };

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>email: </Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={(email) => {
                        this.setState({ email })
                    }}
                />
                <Text style={styles.text}>senha: </Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={(senha) => {
                        this.setState({ senha })
                    }}
                />
                <TouchableHighlight style={styles.btn} onPress={this.cadastrar}>
                    <Text style={styles.btnText}>Cadastrar</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001d51',
        padding: 20,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    btn: {
        backgroundColor: '#ff5555',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
    }
});
