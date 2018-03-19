/**
 * Created by wenzil on 2018/3/15.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

export default class CenterBar extends Component {
    static defaultProps = {
        itemBean:null,
    }

    render() {
        var itemBean = this.props.itemBean;
        return (
            <View style={styles.viewStyle}>
                {/*左边*/}
                <View style={styles.view1Style}>
                    {this.renderLeftItem(itemBean)}
                </View>

                {/*中间*/}
                {this.renderItem(itemBean, 0, 1)}

                {/*右边*/}
                {this.renderItem(itemBean, 2, 3)}
            </View>
        )
    }

    renderLeftItem(itemBean) {
        if (itemBean.type == 0) {
            return (
                <View style={[styles.leftViewStyle, {backgroundColor:itemBean.bgColor}]}>
                    <Text style={{textAlign:'center', color:'white', fontSize:16}}>{itemBean.title}</Text>
                    <Image style={{width:40, height:40, marginTop:10}} source={{uri:itemBean.imageUrl}}></Image>
                </View>
            )
        } else if(itemBean.type == 1) {
            return (
                this.renderItem(itemBean, 4, 5)
            )
        }
    }

    renderItem(itemBean, index1, index2) {
        return(
            <View style={styles.view3Style}>
                {/*上*/}
                <View style={[styles.itemViewStyle, {backgroundColor:itemBean.bgColor}]}>
                    <Text style={styles.itemTextStyle}>{itemBean.items[index1].title}</Text>
                </View>

                {/*下*/}
                <View style={[styles.itemViewStyle, {backgroundColor:itemBean.bgColor}]}>
                    <Text style={styles.itemTextStyle}>{itemBean.items[index2].title}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        height:100,
        backgroundColor:'white',
        borderTopWidth:5,
        borderTopColor:'white',
        flexDirection:'row'
    },
    view1Style: {
        flex:1
    },
    view2Style: {
        flex:1,
        backgroundColor:'gray'
    },
    view3Style: {
        flex:1
    },
    itemViewStyle: {
        flex:1,
        justifyContent:'center',
        borderRightWidth:1,
        borderRightColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'white'
    },
    itemTextStyle: {
        textAlign:'center',
        color:'white',
        fontSize:16
    },
    leftViewStyle: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'white',
        borderRightWidth:1,
        borderRightColor:'white'
    }
})