import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default class Detail extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Detail</Text>
                <TouchableOpacity style={{backgroundColor:'green'}} onPress={() => {this.props.navigation.goBack()}}
                >
                    <Text style={{color: '#fff', fontSize: 20, padding: 10}}>Back</Text>
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
  