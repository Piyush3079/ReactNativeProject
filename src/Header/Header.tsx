import React from 'react';
import { Header } from 'react-native-elements';
import ToogleHeader from './ToggleButton';

interface Props {
    navigation: any
}

export default class AppHeader extends React.Component<Props> {
    constructor (props: Props) {
        super(props);
    }
    render() {
        return (
            <Header
                leftComponent={
                    <ToogleHeader
                        navigation={this.props.navigation}
                    />
                }
                centerComponent={{text: 'BetaTesting', style: {color: '#fff'}}}
                rightComponent={{icon: 'home', color: '#fff'}}
            >
            </Header>
        );
    }
}