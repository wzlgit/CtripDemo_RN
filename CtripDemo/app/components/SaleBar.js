/**
 * Created by wenzil on 2018/3/16.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

import TitleBar from '../components/TitleBar';

export default class SaleBar extends Component {
    static defaultProps = {
        benefit: null,
    }

    render() {
        var benefitData = this.props.benefit;
        var benefitItem = benefitData.benefitItem;
        var benefitItems = benefitItem.items;

        return (
            <View style={styles.container}>
                <TitleBar
                    left_text={benefitData.title}
                    right_text={benefitData.descrption}
                />

                <View style={styles.bottom}>
                    {this.renderLeft(benefitItem)}
                    {this.renderRight(benefitItems)}
                </View>
            </View>
        )
    }

    renderLeft(benefitItem) {
        return (
            <View style={styles.left}>
                <Image style={styles.left_img} source={{uri:benefitItem.imageUrl}}></Image>

                <Text style={styles.left_text} numberOfLines={2}>{benefitItem.title}·{benefitItem.descrption}</Text>

                <View style={styles.left_content}>
                    <Text style={{color: '#F9961F', marginRight:5}}>¥{benefitItem.marketPrice}起</Text>

                    <Text style={styles.left_content_round}>省 ¥ {benefitItem.marketPrice - benefitItem.price}</Text>
                </View>
            </View>
        )
    }

    renderRight(benefitItems) {
        return (
            <View style={styles.right}>
                {/*上边*/}
                <View style={styles.right_top}>
                    {/*左边*/}
                    <View style={{marginLeft:10,marginRight:5}}>
                        <Text style={{marginBottom:5,marginTop:15}}>
                            {benefitItems[0].title}
                        </Text>

                        <Text style={{marginBottom:10}}>
                            {benefitItems[0].descrption}
                        </Text>
                    </View>

                    {/*右边*/}
                    <View>
                        <Image style={{width:50,height:50,}}
                               source={{uri:benefitItems[0].imageUrl}}/>
                    </View>
                </View>

                {/*下边*/}
                <View style={{flex:1, flexDirection:'row', marginTop:2}}>
                    {this.renderItem(benefitItems[1])}
                    {this.renderItem(benefitItems[2])}
                </View>
            </View>
        )
    }

    renderItem(item) {
        return (
            <View style={styles.right_bottom_item}>
                <Text>{item.title}</Text>
                <Text>{item.descrption}</Text>
                <Image style={{width:50,height:50,}}
                       source={{uri:item.imageUrl}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f8f8f8',
    },
    bottom: {
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 5,
    },
    left: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        marginRight: 3,
    },
    left_img: {
        flex: 1,
        width: 160,
        height: 90,
    },
    left_text: {
        fontSize: 14,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    left_content: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
    },
    left_content_round: {
        backgroundColor: '#F9961F',
        height: 13,
        lineHeight: 13,
        textAlign: 'center',
        color: 'white',
        borderRadius: 8,
        fontSize: 11,
        paddingLeft: 4,
        paddingRight: 4,
    },
    right: {
        flex: 1,
    },
    right_top: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        marginRight: 2,
    },
    right_bottom_item: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        marginRight: 2,
    },
});