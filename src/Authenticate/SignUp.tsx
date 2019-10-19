import React, {Component} from 'react';
import {Alert, Button, TextInput, View, StyleSheet, Text} from 'react-native';

interface Credentials {
}

interface State {
    username: string,
    password: string,
    showPassword: boolean
}

export class SignUp extends React.Component<Credentials, State> {
    constructor(props: Credentials) {
        super(props);

        this.state = {
            username: '',
            password: '',
            showPassword: false
        };
    }

    onLogin() {
        const {username, password} = this.state;
        Alert.alert('Credentials', `${username} ${password}`);
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({username})}
                    placeholder='Username'
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                    placeholder='Password'
                    style={styles.input}
                    secureTextEntry={!this.state.showPassword}
                />
                <Text
                    style={styles.text}
                    onPress={() => {this.setState({showPassword: !this.state.showPassword})}}
                >{this.state.showPassword ? 'Hide Password..' : 'Show Password..'}</Text>

                <Button
                    title={'SignUp'}
                    onPress={this.onLogin.bind(this)}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1'
    },
    input: {
        width: 350,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10
    },
    text: {
        textDecorationLine: 'underline',
        color: 'blue',
        textAlign: 'left'
    }
});