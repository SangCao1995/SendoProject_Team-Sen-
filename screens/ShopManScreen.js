import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Banner from '../components/manshopcomponents/Banner';
import Recommend from '../components/manshopcomponents/Recommend';
import ProductForYou from '../components/manshopcomponents/ProductForYou';
import FashionMan from '../components/manshopcomponents/FashionMan';

export default class ShopManScreen extends React.Component {
    render() {
        return(
            <ScrollView contentContainerStyle={styles.scrollview}>
                <Banner onPressButton={this.props.onPressFashion}/>
                <Recommend onPressButton={this.props.onPressRecommend}/>
                <ProductForYou/>
                <FashionMan onPressButton={this.props.onPressFashion}/>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: '#F2F2F2'
    }
})