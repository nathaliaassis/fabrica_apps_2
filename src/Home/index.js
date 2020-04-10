import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../dbConnection';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.Sair = this.Sair.bind(this);
    }

    Sair() {
        firebase.auth().signOut();
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Olá, você está na home!</Text>

                <TouchableOpacity style={styles.btn} onPress={this.Sair}>
                    <Text style={styles.btnText}>Sair</Text>
                </TouchableOpacity>
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
