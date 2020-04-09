import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import firebase from '../dbConnection';
import { CommonActions } from '@react-navigation/native';

console.disableYellowBox = true;

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
            isLoggedIn: false,
            nome: '',
        }
        this.Logar = this.Logar.bind(this);

        firebase.auth().signOut();
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('users').child(user.uid).once('value')
                    .then((snapshot) => {
                        let nome = snapshot.val().nome;

                    });

                this.props.navigation.navigate('Home');
            }
        });
    }

    Logar() {
        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.senha
        ).catch((error) => {
            if (error.code == 'auth/wrong-password') {
                alert('Senha incorreta.')
            }
            else {
                alert('Ops, tente novamente.');
            }
        });

        Keyboard.dismiss();
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
                <TouchableOpacity style={styles.btn} onPress={this.Logar}>
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
                <Text style={[styles.text, { textAlign: 'center' }]}
                    onPress={() => this.props.navigation.navigate('Cadastrar')}
                >
                    Criar minha conta
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
