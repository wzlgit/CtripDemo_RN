/**
 * Created by wenzil on 2018/3/15.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Dimensions
} from 'react-native';

var {width} = Dimensions.get('window');
import Swiper from 'react-native-swiper';

export default class Banner extends Component {
    static defaultProps = {
        banners:null,
    }

    render(){
        var banners = this.props.banners;

        return(
            <View>
                <Swiper height={150}
                        dot={<View style={{backgroundColor: 'rgba(0,0,0,0.6)', width: 5,
                                height: 5, borderRadius: 4, marginLeft: 3,
                                marginRight: 3, marginTop: 3, marginBottom: 3}} />}

                        activeDot={<View style={{backgroundColor: 'white', width: 8,
                                height: 8, borderRadius: 4, marginLeft: 3,
                                marginRight: 3, marginTop: 3, marginBottom: 3}} />}

                        paginationStyle={{
                            bottom:0,
                            right:10,
                            justifyContent:'flex-end'
                        }}

                        loop={true}
                        autoplay={true}
                >
                    {this.renderBanners(banners)}
                </Swiper>
            </View>
        )
    }

    renderBanners(banners) {
        var currentBanners = [];
        for (var i = 0;i < banners.length;i++) {
            var banner = banners[i];
            currentBanners.push(
                <View key={i}>
                    <Image source={{uri:banner.imgUrl}}
                        style={{width:width, height:150}}></Image>
                </View>
            )
        }
        return currentBanners;
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        height:150,
        backgroundColor:'pink'
    }
})