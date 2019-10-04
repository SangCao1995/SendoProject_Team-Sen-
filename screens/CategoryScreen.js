// import React, { Component } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
// import { Ionicons, MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
// import { ListItem, Card } from 'react-native-elements'
// import { FlatGrid } from 'react-native-super-grid';

// const items = [
//     { name: 'TURQUOISE', code: '#1abc9c', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' },
//     { name: 'EMERALD', code: '#2ecc71', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' },
//     { name: 'PETER RIVER', code: '#3498db', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' },
//     { name: 'AMETHYST', code: '#9b59b6', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' },
//     { name: 'WET ASPHALT', code: '#34495e', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' },
//     { name: 'GREEN SEA', code: '#16a085', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' },
//     { name: 'NEPHRITIS', code: '#27ae60', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' },
//     { name: 'BELIZE HOLE', code: '#2980b9', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' },
//     { name: 'WISTERIA', code: '#8e44ad', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' },
//     { name: 'MIDNIGHT BLUE', code: '#2c3e50', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' },
//     { name: 'SUN FLOWER', code: '#f1c40f', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' },
//     { name: 'CARROT', code: '#e67e22', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' },

// ];

// export default class CategoryScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }


//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.header}>
//                     <TouchableOpacity style={styles.buttonBack}>
//                         <MaterialCommunityIcons name="keyboard-backspace" size={30} color='white' />
//                     </TouchableOpacity>
//                     <Text style={styles.headerText}>Tất cả mặt hàng</Text>
//                 </View>

//                 <ScrollView style={{ flex: 0.9, backgroundColor: 'white', flexDirection: 'row' }}>
//                     {/* <View style={{
//                         flexDirection: 'row',
//                         justifyContent: 'center',
//                         alignItems: 'center'

//                     }}>
//                         {users.map(item => {
//                             return (
//                                 <Card title={item.name}  image={{ uri: item.avatar }}>

//                                 </Card>
//                             )
//                         })}
//                     </View> */}
//                     {/* <FlatList
//                     data={items}
//                     numColumns={1}
//                     renderItem={({item}) => (
//                         <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
//                                 <Image
//                                 style={{width: '100%', height: '90%',backgroundColor:'white',resizeMode: 'stretch'}}
//                                 source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
//                                 />
//                                 <Text style={styles.itemName}>{item.name}</Text>
//                             </View>
//                     )}
//                     /> */}
//                     <FlatGrid
//                         itemDimension={150}
//                         items={items}
//                         style={styles.gridView}
//                         renderItem={({ item }) => (
//                             <View style={[styles.itemContainer, { backgroundColor: 'red' }]}>
//                                 <Image
//                                     style={styles.itemImage}
//                                     source={{
//                                         uri:
//                                             'https://2sao.vietnamnetjsc.vn/images/2019/09/01/21/09/midu-1.jpg',
//                                     }} />
//                                 <Text style={styles.itemName}>{item.name}</Text>

//                             </View>
//                         )}
//                     />
//                 </ScrollView>

//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     header: {
//         flex: 0.1,
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         backgroundColor: 'red'
//     },
//     buttonBack: {
//         backgroundColor: 'red',
//         width: 50,
//         height: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 20,
//         marginLeft: 2,
//         shadowOffset: {
//             width: 0,
//             height: 12,
//         },
//         shadowOpacity: 0.7,
//         shadowRadius: 16.00,
//         elevation: 24,
//         shadowOpacity: 0.37,
//         shadowRadius: 7.49,
//     },
//     headerText: { //chữ follow
//         color: 'white',
//         fontSize: 17,
//         paddingLeft: 90,
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontWeight: '400'
//     },
//     ////////////
//     gridView: {
//         marginTop: 20,
//         flex: 1,
//     },
//     itemContainer: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         shadowOpacity: 0.37,
//         shadowRadius: 7.49,
//         padding: 10,
//         height: 150,
//     },
//     itemImage: {
//         width: '100%',
//         height: '90%',
//         resizeMode: 'stretch'
//     },
//     itemName: {
//         fontSize: 16,
//         justifyContent: 'center',
//         color: '#fff',
//         fontWeight: '600',
//     },
//     itemCode: {
//         fontWeight: '600',
//         fontSize: 12,
//         color: '#fff',
//     },
// });  

import React, { Component } from 'react';
import { View, StyleSheet, FlatList,Text, TouchableOpacity, Image } from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import { CategoryData } from '../constants/CategoryData';
import ItemCategory from '../components/ItemCategory';
import LogoTitle from '../components/LogoTitle';

const numColumns = 2;

export default class CategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: CategoryData
        };
    }
    // onPressActionRow = (item) => {
    //     //alert(item.CategoryID);
    //     if(item.CategoryID === 2) {
    //         this.props.navigation.navigate('Shopping', {categoryID: item.CategoryID});
    //     }
    // }
    
    render() {
        const dataSourceCategory = this.props.navigation.getParam('dataSourceCategory');
        //const dataSourceCategory1 = this.props.navigation.getParam('')
        return (

            <View style={styles.container}>

                
                <FlatList data={dataSourceCategory}
                    renderItem={({ item }) => (
                        <ItemCategory item={item} onPressItem={() => { this.onPressActionRow(item) }} />
                    )}
                    numColumns={numColumns}
                    keyExtractor={(item,index) => index.toString()}/>



            </View>

        );
    }
}

CategoryScreen.navigationOptions = props => {
    return{
        headerTitle: (
            <View style={styles.headerTitle}>
                <LogoTitle/>
            </View>
        ),
        headerBackground: (
          <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: 'https://img.freepik.com/free-psd/abstract-background-design_1297-82.jpg?size=626&ext=jpg'}}
          />
        ),
        headerTintColor: 'white',
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    buttonBack: {
        backgroundColor: 'red',
        width: 50,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 2,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.7,
        shadowRadius: 16.00,
        elevation: 24,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    },
    headerText: { //chữ follow
        color: 'white',
        fontSize: 17,
        paddingLeft: 90,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '400'
    },
    //////////
    allProduct:{
        flex : 0.9,
        marginTop: 4,
        marginLeft: 12,
        marginRight: 16
    },
    headerTitle: {
        //marginLeft: 90
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

})