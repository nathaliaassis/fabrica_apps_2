import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      cargo: '',
    }
    this.cadastrar = this.cadastrar.bind(this);

    let config = {
      apiKey: "AIzaSyBgaeJGSQtU6uXjDaaKGjDuK46u9qWEXNQ",
      authDomain: "meuapp-2d985.firebaseapp.com",
      databaseURL: "https://meuapp-2d985.firebaseio.com",
      projectId: "meuapp-2d985",
      storageBucket: "meuapp-2d985.appspot.com",
      messagingSenderId: "818945985520",
      appId: "1:818945985520:web:97bd8e9cc61decfdc22b35",
      measurementId: "G-VDVW0ZP5YJ"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
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
    } else {
      alert('preencha os campos')
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
