/**
 * Created by wenzil on 2018/3/15.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// 导入TabNavigator库
import TabNavigator from 'react-native-tab-navigator'
import HomePage from '../home/HomePage'

export default class MainPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'首页'
        }
    }

    render() {
        return (
            <TabNavigator
                tabBarStyle={{backgroundColor:'#e1e1e1',height:50}}>
                {/*首页*/}
                <TabNavigator.Item
                    title="首页"
                    selected={this.state.selectedTab == '首页'}
                    renderIcon={() => <Image style={styles.imageStyle} source={require('../../image/home_icon_nornol.png')}></Image>}
                    renderSelectedIcon={() => <Image style={styles.imageStyle} source={require('../../image/home_icon_press.png')}></Image>}
                    onPress={() => this.setState({
                        selectedTab:'首页'
                    })}
                >
                    <HomePage></HomePage>
                </TabNavigator.Item>

                {/*行程*/}
                <TabNavigator.Item
                    title="行程"
                    selected={this.state.selectedTab == '行程'}
                    renderIcon={() => <Image style={styles.imageStyle} source={require('../../image/plan_icon_nornol.png')}></Image>}
                    renderSelectedIcon={() => <Image style={styles.imageStyle} source={require('../../image/plan_icon_press.png')}></Image>}
                    onPress={() => this.setState({
                        selectedTab:'行程'
                    })}
                >
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>行程</Text>
                    </View>
                </TabNavigator.Item>

                {/*客服*/}
                <TabNavigator.Item
                    title="客服"
                    selected={this.state.selectedTab == '客服'}
                    renderIcon={() => <Image style={styles.imageStyle} source={require('../../image/mine_icon_nornol.png')}></Image>}
                    renderSelectedIcon={() => <Image style={styles.imageStyle} source={require('../../image/mine_icon_press.png')}></Image>}
                    onPress={() => this.setState({
                        selectedTab:'客服'
                    })}
                >
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>客服</Text>
                    </View>
                </TabNavigator.Item>

                {/*我的*/}
                <TabNavigator.Item
                    title="我的"
                    selected={this.state.selectedTab == '我的'}
                    renderIcon={() => <Image style={styles.imageStyle} source={require('../../image/mine_icon_nornol.png')}></Image>}
                    renderSelectedIcon={() => <Image style={styles.imageStyle} source={require('../../image/mine_icon_press.png')}></Image>}
                    onPress={() => this.setState({
                        selectedTab:'我的'
                    })}
                >
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>我的</Text>
                    </View>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width:24,
        height:24,
        marginTop:2
    },
    viewStyle: {
        flex:1,
        marginTop: 20,
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle: {
        fontSize: 20,
        color:'black',
    }
})
