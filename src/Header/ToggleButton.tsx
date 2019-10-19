import React from 'react';
import {Button} from 'react-native';

interface States {
    isDrawerOpen: boolean
}

interface Props {
    navigation: {
        openDrawer: () => any,
        closeDrawer: () => any
    }
}

export default class HeaderToggle extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isDrawerOpen: false
        }
    }
    handleDrawer () {
        console.log("here");
        this.state.isDrawerOpen ? 
        this.props.navigation.closeDrawer()
            : this.props.navigation.openDrawer();
    }
    render() {
        console.log(this.props);
        return (
            <Button
                title={this.state.isDrawerOpen ? 'Close' : 'Open'}
                onPress={this.handleDrawer.bind(this)}
            >
            </Button>
        );
    }
}