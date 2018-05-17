import React, {Component} from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

export default class Home extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Home</Text>
                <TouchableOpacity style={{backgroundColor:'green'}} onPress={() => {this.props.navigation.navigate('ManHinh_Detail')}}
                >
                    <Text style={{color: '#fff', fontSize: 20, padding: 10}}>Go to Detail</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'green'}} onPress={() => {this.props.navigation.navigate('DrawerOpen')}}
                >
                    <Text style={{color: '#fff', fontSize: 20, padding: 10}}>Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  