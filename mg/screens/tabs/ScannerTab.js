import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class ScannerTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="md-basket" style={{ color: tintColor }} />
        }
    }
    render() {
        return (<Container>
                    <Content>
                        <Text>
                            This is ScannerTab
                        </Text>
                    </Content>
                </Container>);
    }
}