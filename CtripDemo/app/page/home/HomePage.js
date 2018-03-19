/**
 * Created by wenzil on 2018/3/15.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import HomeTopBar from '../../components/HomeTopBar';
import Banner from '../../components/Banner';
import CenterBar from '../../components/CenterBar';
import CategoryBar from '../../components/CategoryBar';
import SaleBar from '../../components/SaleBar';
import HotContentBar from '../../components/HotContentBar';
var homebean = require('../../data/homebean.json');

export default class HomePage extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <HomeTopBar/>
                <ScrollView>
                    {/*广告轮播图*/}
                    <Banner banners={homebean.banners}/>
                    {/*内容栏*/}
                    {this.renderItems(homebean.itemBeans)}

                    {/*分类布局*/}
                    <View style={styles.categorys}>
                        {this.renderCategory(homebean.categroys)}
                    </View>
                    {/*特卖汇*/}
                    <SaleBar benefit={homebean.benefit}/>
                    {/*热门活动*/}
                    <HotContentBar hotPalys={homebean.hotPalys}/>
                </ScrollView>
            </View>
        )
    }

    renderCategory(categorys) {
        var Categorys = [];
        for (var i = 0;i < 3;i++) {
            var newCategorys = categorys.slice(4 * i, 4 * (i + 1));
            Categorys.push(
                <View key={i}>
                    <CategoryBar categorys={newCategorys}/>
                </View>
            )
        }
    }

    renderItems(itemBeans){
        var Items = [];
        for(var i = 0;i < itemBeans.length;i++) {
            var itemBean = itemBeans[i];
            Items.push(
                <View key={i}>
                    <CenterBar itemBean={itemBean}></CenterBar>
                </View>
            )
        }
        return Items;
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:'#f8f8f8'
    },
    categorys: {
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 5,
    },
})
