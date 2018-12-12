import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'react-native';

export default class ReglageTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="md-basket" style={{ color: tintColor }} />
        }
    }
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is ReglageTab
                </Text>
            </Content>
        </Container>);
    }
}