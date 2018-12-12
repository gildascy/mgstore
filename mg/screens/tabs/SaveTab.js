import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class SaveTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="md-basket" style={{ color: tintColor }} />
        }
    }
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is SaveTab
                </Text>
            </Content>
        </Container>);
    }
}