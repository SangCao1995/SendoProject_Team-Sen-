import React from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import ShoppingManScreen from './ShoppingManScreen';
import ShoppingWomanScreen from './ShoppingWomanScreen';
import Shopping from '../components/shoppingwomancomponents/Shopping';
import LogoTitle from '../components/LogoTitle';
import ContentFashionWoman from '../components/shoppingwomancomponents/ContentFashionWoman';

export default class ShoppingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            loading: true
        }
    }
    onPressButtonCategoryWomanTotal = () => {
        this.props.navigation.navigate("Category");
    }
    componentDidMount() {
        function shuffle(arra1) {
            var ctr = arra1.length, temp, index;
      
            // While there are elements in the array
            while (ctr > 0) {
              // Pick a random index
              index = Math.floor(Math.random() * ctr);
              // Decrease ctr by 1
              ctr--;
              // And swap the last element with it
              temp = arra1[ctr];
              arra1[ctr] = arra1[index];
              arra1[index] = temp;
            }
            return arra1;
          }
      
          // Dạo chợ
          fetch("https://raw.githubusercontent.com/emonno13/jsontest/master/user_rec_50_items.json?fbclid=IwAR0GteWs5w5hPBJxa74BalGo3S0sY2B2b1Fhj07giLoXzQ9clGNFsUjnN3k")
            .then(response => response.json())
            .then((responseJson) => {
              console.log(responseJson);
              this.setState({
                loading: false,
                dataSource: shuffle(responseJson)
              },
              console.log("test"),
              console.log(this.state.dataSource),
              console.warn(this.state.dataSource))
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }
    render() {
        //const data = this.props.navigation.getParam('gender');
        const isOnPressRecommend = this.props.navigation.getParam('isOnPressRecommend');
        //console.log(isOnPressRecommend);
        const isOnPressFashion = this.props.navigation.getParam('isOnPressFashion');
        const categoryID = this.props.navigation.getParam('categoryID');
        //console.log(categoryID);
        //console.log(isOnPressRecommend);
        //console.log(item);
        // if (data === 1) {
        //     return (<ShoppingManScreen isOnPressRecommend={isOnPressRecommend}
        //     isOnPressFashion={isOnPressFashion}/>)
        // }
        // else if (data === 2) {
        //     return (<ShoppingWomanScreen isOnPressRecommend={isOnPressRecommend}
        //     isOnPressFashion={isOnPressFashion}
        //     onPressButtonCategoryWoman={() => {this.onPressButtonCategoryWomanTotal()}}
        //     categoryID={categoryID}/>)
        // }
        if (this.state.loading) {
            return (
                <View style={styles.loading}>
                  <ActivityIndicator size="large" color="red" />
                </View>
              )
        }
        return (
            <View>
                <ContentFashionWoman dataSourceFashion={this.state.dataSource}/>
            </View>
        )
    }
}

ShoppingScreen.navigationOptions = props => {
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
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        //backgroundColor: 'red'
    },
    headerTitle: {
        //marginLeft: 90
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    loading: { 
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})