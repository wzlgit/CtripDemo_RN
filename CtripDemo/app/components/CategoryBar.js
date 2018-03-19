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

export default class CategoryBar extends Component {
    static defaultProps = {
        categorys:null,
    }
    render() {
        var categoryItems = this.props.categorys;
        return (
            <View style={styles.view1Style}>
                {this.renderCategoryItem(categoryItems)}
            </View>
        )
    }

    renderCategoryItem(categoryItems) {
        var Items = [];
        for (var i = 0;i < categoryItems.length;i++) {
            var itemBean = categoryItems[i];
            Items.push(
                <View>
                    <Image source={{uri:itemBean.icon}} style={styles.iconStyle} />
                    <Text>{itemBean.title}</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    view1Style : {
        flexDirection:'row'
    },
    view2Style: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#f8f8f8',
        borderRightWidth:1,
        borderRightColor:'#f8f8f8'
    },
    iconStyle: {
        width:20,
        height:20,
        marginBottom:5
    }
})