/**
 * Created by wenzil on 2018/3/15.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

export default class HomeTopBar extends Component<Props> {
    render() {
        return (
            <View style={styles.viewStyle}>

                <View style={styles.view1Style}>
                    <Image style={styles.imageStyle} source={require('../image/scan_icon.png')}></Image>
                </View>

                <View style={styles.view2Style}>
                    <TextInput
                        placeholder={'目的地/酒店/景点'}
                        underlineColorAndroid={'transparent'}
                        style={styles.textInputStyle}
                    />
                    <Image style={styles.searchStyle} source={require('../image/search_icon.png')}></Image>
                </View>

                <View style={styles.view3Style}>
                    <Image style={styles.imageStyle} source={require('../image/message_icon.png')}></Image>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        height:40,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        marginTop:20
    },
    view1Style:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    view2Style:{
        flex:6,
        backgroundColor:'#e1e1e1',
        height:30,
        borderRadius:3
    },
    view3Style:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        width:23,
        height:23
    },
    textInputStyle:{
        paddingTop:6,
        paddingLeft:30
    },
    searchStyle:{
        width:25,
        height:25,
        position:'absolute',
        top:3,
        left:3
    }
})