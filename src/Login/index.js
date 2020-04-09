import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
        }
        this.cadastrar = this.cadastrar.bind(this);
    }
    cadastrar(){
        
    }
    render() {
        return (
            <View>
                <Text>LOGIN PAGE</Text>
            </View>
        );
    }
}