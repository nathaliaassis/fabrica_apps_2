import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableHighlight, Keyboard } from 'react-native';
import firebase from '../dbConnection';
import { FlatList } from 'react-native-gesture-handler';

export default class lista extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            cargo: '',
        }
        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar() {
        if (this.state.nome != '' && this.state.cargo != '') {

            let users = firebase.database().ref('users');
            let chave = users.push().key;

            users.child(chave).set({
                nome: this.state.nome,
                cargo: this.state.cargo
            });
            alert('usuario cadastrado com sucesso')

            Keyboard.dismiss();
        } else {
            alert('preencha todos os campos')
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Nome: </Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={(nome) => {
                        this.setState({ nome })
                    }}
                />
                <Text style={styles.text}>Cargo: </Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={(cargo) => {
                        this.setState({ cargo })
                    }}
                />
                <TouchableHighlight style={styles.btn} onPress={this.cadastrar}>
                    <Text style={styles.btnText}>Cadastrar</Text>
                </TouchableHighlight>
                <FlatList
                    data={this.state.lista}
                    renderItem={({ item }) => <Listagem data={item} />}
                />
            </View>
        );
    }
}

class Listagem extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: 'white', padding: 10, borderRadius: 10,
                flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10
            }}>
                <Text>{this.props.data.nome}</Text>
                <Text>{this.props.data.cargo}</Text>
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
