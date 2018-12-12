//import { Container, Text, Content } from 'native-base';
//import { Icon } from 'native-base';
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
//import {Platform} from 'react-native';
import QbTab from './tabs/QbTab';
import ScannerTab from './tabs/ScannerTab';
import SaveTab from './tabs/SaveTab';
import ReglageTab from './tabs/ReglageTab';
//import CartTab from './tabs/CartTab';

export default class Main extends Component {
    static navigationOptions = {
        headerLeft: "QB",
    }
    render() {
        return (<MainNavigator />) 
    }
}
const MainNavigator = TabNavigator({
    QbTab: {
        screen: QbTab,
        title: "QB"
    },
    ScannerTab: {
        screen: ScannerTab,
        title: "SCANNER"
    },
    SaveTab: {
        screen: SaveTab,
        title: "SAUVEGARDER"
    },
    ReglageTab: {
        screen: ReglageTab,
        title: "REGLAGES"
    }/* ,
    CartTab: {
        screen: CartTab
    }, */
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'top', 
    tabBarOptions: {
        showIcon: true,
        showLabel: true,  
        style: {
            backgroundColor: 'teal',
        },          
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',   
    }
});