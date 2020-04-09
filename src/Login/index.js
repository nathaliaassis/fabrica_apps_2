import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableHighlight, Keyboard } from 'react-native';
import firebase from '../dbConnection';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
        }
        this.Logar = this.Logar.bind(this);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                alert('Usuário logado com sucesso!');
            }
        });

    }

    Logar() {

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((error) => {
                if (error.code == 'auth/wrong-password') {
                    alert('Senha incorreta.')
                }
                else {
                    alert('Ops, tente novamente.');
                }
            });

    };

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Entrar</Text>
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
                <TouchableHighlight style={styles.btn} onPress={this.Logar}>
                    <Text style={styles.btnText}>Entrar</Text>
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
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
        marginBottom: 24,
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
