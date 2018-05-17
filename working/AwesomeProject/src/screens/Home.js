import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={{flex:1,justifyConent:'center',alignItems:'center'}}>
                <Text>Home</Text>
            </View>
        );
    }
}