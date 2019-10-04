import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image, ScrollView, FlatList} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {ProductForYouWomanData} from '../../constants/WomanData/ProductForYouWomanData';
import ItemShoppingWoman from './ItemShoppingWoman';
import ContentRecommend from './ContentRecommend';
import ContentFashionWoman from './ContentFashionWoman';
import ContentTrending from './ContentTrending';
import { SearchBar } from 'react-native-elements';

var isRecommendButton = false;
var isFashionButton = false;
var isTrendingButton = false;
//var content = <View></View>;
export default class Shopping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProductForYouWomanData,
            isRecommendButton: false,
            isFashionButton: false,
            content: this.props.content,
            isOnPressWomanRecommend: this.props.isOnPressWomanRecommend,
            isOnPressWomanFashion: this.props.isOnPressWomanFashion,
            isOnPressWomanTrending: this.props.isOnPressWomanTrending,
            categoryID: this.props.categoryID,
            test: false,
            isLoading: true,
            search: '',
            dataSourceRecommend: this.props.dataSourceRecommend
        }
        this.arrayholder = [];
        
        console.log(this.props.dataSourceFashion);
        console.log(this.props.dataSourceRecommend);
        console.log(this.props.dataSourceTrending);
        console.log(this.props.content);
        //console.log(this.state.categoryID);
    }
    
    

    // actionOnRow = (item) => {
    //     switch(item.CategoryID) {
    //         case 1: 
    //             return();
    //             break;
    //     }
    // }

    // componentWillMount() {
    //     this.setState({
    //         isOnPressWomanRecommend: this.props.isOnPressWomanRecommend
    //     })
    //     console.log("1" + this.state.isOnPressWomanRecommend);
    // }
    // componentDidUpdate() {
    //     if(this.props.isOnPressWomanRecommend != this.state.isOnPressWomanRecommend){ //it is necessary because this function called many time's 
    //            this.setState({isOnPressWomanRecommend: this.props.isOnPressWomanRecommend})
    //     }
    //     console.log("2" + this.state.isOnPressWomanRecommend);
    //     if(this.state.isOnPressWomanRecommend === true) {
    //         //console.log("Sang");
    //         this.setState({
    //             content: <ContentRecommend/>
    //         })
    //     }
    // }

    componentDidMount() {
        //console.log("Sang" + this.state.isOnPressWomanRecommend);
        //const isOnPressWomanRecommend = this.props.isOnPressWomanRecommend;
        //console.log(isOnPressWomanRecommend);
        // if(this.props.isOnPressWomanRecommend != this.state.isOnPressWomanRecommend){ //it is necessary because this function called many time's 
        //        this.setState({isOnPressWomanRecommend: this.props.isOnPressWomanRecommend})
        // }
        // console.log("3" + this.state.isOnPressWomanRecommend);
        
        // if(this.state.categoryID === 2) {
        //     this.setState({
        //         content: <ContentFashionWoman/>
        //     })
        // }
        console.log("Render");
        // if(this.state.isOnPressWomanRecommend === true) {
        //     this.state.content = <ContentRecommend dataSourceRecommend={this.props.dataSourceRecommend}/>
        // }
        // this.setState({
        //     content: this.state.content
        // })
        // if(this.state.isOnPressWomanFashion === true) {
        //     console.log("Test" + this.state.isOnPressWomanFashion);
        //     this.setState({
        //         content: <ContentFashionWoman dataSourceFashion={this.props.dataSourceFashion}/>
        //     })
        // }
        // if (this.state.isOnPressWomanTrending === true) {
        //     this.setState({
        //         content: <ContentTrending dataSourceTrending={this.props.dataSourceTrending}/>
        //     })
        // }
    }
    
    onRecommendButton = () => {
        //alert("Recommend");
        isRecommendButton = true;
        if (isRecommendButton === true) {
            this.setState({
                content: <ContentRecommend dataSourceRecommend={this.props.dataSourceRecommend}/>,
            })
        } 
    }

    onShoppingButton = () => {
        //alert("Shopping");
        isFashionButton = true;
        if (isFashionButton === true) {
            this.setState({
                content: <ContentFashionWoman dataSourceFashion={this.props.dataSourceFashion}/>
            })
        } 
    }
    onTrendingButton = () => {
        isTrendingButton = true;
        if (isTrendingButton === true) {
            this.setState({
                content: <ContentTrending dataSourceTrending={this.props.dataSourceTrending}/>
            })
        } 
    }

    search = text => {
        console.log(text);
      };
      clear = () => {
        this.search.clear();
      };
      SearchFilterFunction(text) {
        const newData = this.arrayholder.filter(function (item) {
          const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          dataSourceRecommend: newData,
          search: text,
        });
      }
    
    render() {
        //const {item} = this.props
        //let content;
        // if(this.state.isRecommendButton === true) {
        //     this.setState({
                
        //     })
        //     //console.log(this.state.content);
        // }

        // const isOnPress = this.props.isOnPress;
        // if(isOnPress === true) {
        //     this.setState({
        //         content: <ContentRecommend/>
        //     })
        // }
        //console.log(this.props.isOnPressWomanRecommend);
        
        
        actionOnRow = (item) => {
            if(item.CategoryID === 1) {
                //alert(item.CategoryID);
                this.setState({
                    content: <ContentFashionWoman dataSourceFashion={this.state.dataSourceFashion}/>
                })
                //this.state.content = <ContentFashionWoman/>
            }
        }
        
        return(
            <View style={styles.shoppingWrapper}>
                <View style={styles.view1}> 
                    <View style={styles.shoppingTop}>
                        <Text style={styles.shoppingText}>Dạo chợ Sen Đỏ</Text>
                        <TouchableOpacity style={styles.allCategoryButton} onPress={this.props.onCategoryButton}>
                            <Text style={styles.allCategoryText}>Tất cả danh mục</Text>
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
                        <TouchableOpacity style={styles.shoppingButton} onPress={() => this.onShoppingButton()}>
                            <Image style={styles.shoppingImage}
                                source={{ uri: 'https://englishtown.edu.vn/wp-content/uploads/2019/03/tu-vung-tieng-anh-mua-sam.jpg' }} />
                            <Text style={styles.shopping1Text}>Dạo chợ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.trendingButton} onPress={() => this.onTrendingButton()}>
                            <Image style={styles.trendingImage}
                                source={{ uri: 'https://www.10trending.com/wp-content/uploads/2018/10/Best-Top-100-Trending-Products-Sell-Online-2019.png' }} />
                            <Text style={styles.trendingText}>Xu hướng</Text>
                        </TouchableOpacity>
                        <FlatList data={this.state.data}
                            renderItem={({ item }) => (
                                <ItemShoppingWoman item={item} onPressItemWoman={() => actionOnRow(item)} />
                            )}
                            horizontal={true} 
                            keyExtractor={(item,index) => index.toString()}/>
                    </ScrollView>
                </View>
                <View style={styles.view2}>
                    {/* <SearchBar
                        round
                        searchIcon={{ size: 24 }}
                        onChangeText={text => this.SearchFilterFunction(text)}
                        onClear={text => this.SearchFilterFunction('')}
                        placeholder="Looking for ..."
                        value={this.state.search}
                    /> */}
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
    shoppingButton: {
        alignItems: 'center',
        marginLeft: 4
    },
    shoppingImage: {
        width: 64,
        height: 64
    },
    shopping1Text: {
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 14,
        padding: 4
    },
    trendingButton: {
        alignItems: 'center',
        marginLeft: 4
    },
    trendingImage: {
        width: 64,
        height: 64
    },
    trendingText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 14,
        padding: 4
    }
})