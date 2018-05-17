import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Home from './screens/Home';
import User from './screens/User';
import Detail from './screens/Detail';
import Menu from './screens/Menu';

export const HomeStack = StackNavigator({
    Manhinh_Home: {
        screen: Home,
        navigationOptions: {
            title: 'Trang chu'
        }
    },
    ManHinh_Detail: {
        screen: Detail,
        navigationOptions: {
            title: 'Chi tiet'
        }
    },
});
export const UserStack = StackNavigator({
    ManHinh_User: {
        screen: User,
        navigationOptions: {
            title: 'Tai khoan'
        }
    }
})
export const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions:{
            tabBarLabel:'Trang chu'
        }
    },
    User: {
        screen: UserStack,
        navigationOptions:{
            tabBarLabel:'Tai khoan'
        }
    }
},
    {
        tabBarOptions:{
            inactiveTintColor:'green',
            activeTintColor: 'red',
        }
    }
)

export const SideMenu = DrawerNavigator({
    Tabbar:{
        screen: Tabs
    },

},
    {
        drawerWidth: 350,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props}/>
    }
)
