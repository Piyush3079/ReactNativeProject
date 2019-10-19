import React from 'react';
import {View} from 'react-native';
import Header from '../Header/Header';
import Login from '../Navigation';

interface Props {
    navigation: Object
}

export default class Authenticate extends React.Component<Props> {
    static navigationOptions = {
        drawerLabel: 'Login'
    }
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} />
                <Login />
            </View>
        )
    }
}