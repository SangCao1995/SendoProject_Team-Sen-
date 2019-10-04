import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image, ScrollView, FlatList} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {ProductForYouManData} from '../../constants/ManData/ProductForYouManData';
import ItemShoppingMan from './ItemShoppingMan';
import ContentRecommend from './ContentRecommend';
import ContentFashionMan from './ContentFashionMan';

export default class Shopping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProductForYouManData,
            isRecommendButton: false,
            content: <View></View>,
            isOnPressManRecommend: this.props.isOnPressManRecommend,
            isOnPressManFashion: this.props.isOnPressManFashion
        }
    }
    
    onRecommendButton = () => {
        this.setState({
            isRecommendButton: true,
            content: <ContentRecommend/>
        })
    }
    componentDidMount() {
        if(this.state.isOnPressManRecommend === true) {
            this.setState({
                content: <ContentRecommend/>
            })
        }
        if(this.state.isOnPressManFashion === true) {
            this.setState({
                content: <ContentFashionMan/>
            })
        }
    }
    // actionOnRow = (item) => {
    //     switch(item.CategoryID) {
    //         case 1: 
    //             return();
    //             break;
    //     }
    // }
    render() {
        //let content;
        // if(this.state.isRecommendButton === true) {
        //     this.state.content = <ContentRecommend/>
        //     console.log(this.state.content);
        // }
        actionOnRow = (item) => {
            if(item.CategoryID === 1) {
                this.setState({
                    content: <ContentFashionMan/>
                })
            }
        }
        return(
            <View style={styles.shoppingWrapper}>
                <View style={styles.view1}> 
                    <View style={styles.shoppingTop}>
                        <Text style={styles.shoppingText}>Dạo chợ Sen Đỏ</Text>
                        <TouchableOpacity style={styles.allCategoryButton}>
                            <Text style={styles.allCategoryText}>Tất cả mặt hàng</Text>
                            <AntDesign name="right" style={styles.icon} color='#D90429' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}></View>
                    <ScrollView contentContainerStyle={styles.scrollview} horizontal={true}>
                        <TouchableOpacity style={styles.recommendButton} onPress={() => this.onRecommendButton()}>
                            <Image style={styles.recommendImage}
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/75c6/f492/f743ca1780003e0cf0e0bf2740583c1f?Expires=1568592000&Signature=cWkRLCJPHlxryACgxUB1WQ3krttJ-Z5W-nHgOUAqxWslBPvbsOJefyDzXv0Cv-gLJaLITygeDuZW1eos~uMZKOQ3~-kihnODpKs7r-abJ9pzkoeA5q52g4f9A4o1JPLlwr~vMf2G8W225p0rnUfRF90whttrkZptSVkQ2-RW8J6rdWP9GpS8EJQAZOkbhOaUH-M5dK5i~R3mreiFMVAACW7gDappSKzcTL6UdPJESgyT~sKawXnjGwtjMmlspsqhNYm8YhVeSyiQB70JXvhkDFbCqAOx28i6mwN5JK~at~dv0lRFlOkGCnHxqjZ24~WTGkWVIe5s8jhh~WK4t7RJHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }} />
                            <Text style={styles.RecommendText}>Đề cử</Text>
                        </TouchableOpacity>
                        <FlatList data={this.state.data}
                            renderItem={({ item }) => (
                                <ItemShoppingMan item={item} onPressItemMan={() => actionOnRow(item)} />
                            )}
                            horizontal={true} 
                            keyExtractor={(item,index) => index.toString()}/>
                    </ScrollView>
                </View>
                <View style={styles.view2}>
                    {this.state.content}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view1: {
        flex: 0.3,
    },
    view2: {
        flex: 0.7,
    },
    shoppingWrapper: {
        marginTop: 8,
        flex: 1,
    },
    shoppingTop: {
        flexDirection: 'row',
        marginLeft: 8
    },
    shoppingText: {
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'Roboto'
    },
    allCategoryButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    allCategoryText: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto',
        color: '#D90429',
        marginLeft: 98
    },
    icon: {
        marginLeft: 8
    },
    line: {
        marginTop: 4,
        width: 342,
        marginLeft: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#8D99AE',
    },
    scrollview: {
        marginTop: 7,
        marginLeft: 8,
    },
    recommendButton: {
        alignItems: 'center'
    },
    recommendImage: {
        width: 64,
        height: 64
    },
    RecommendText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 14,
        padding: 4
    },
})