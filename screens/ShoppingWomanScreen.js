import React from 'react';
import {ScrollView, View, StyleSheet, Text, FlatList, Image} from 'react-native';
import Shopping from '../components/shoppingwomancomponents/Shopping';
import LogoTitle from '../components/LogoTitle';

export default class ShoppingWomanScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      dataSource1: [],
      dataSource2: [],
      dataSource3: []
    }
  }


  onPressShoppingWomanItem = (item) => {
    this.props.navigation.navigate('ProductDetail', { data: item });
  }
  render() {
    //const isOnPress = this.props.navigation.getParam('isOnPress');
    //console.log(isOnPress);
    //const isOnPressRecommend = this.props.isOnPressRecommend;
    const isOnPressRecommend = this.props.navigation.getParam('isOnPressRecommend');
    //console.log(isOnPressRecommend);
    const isOnPressFashion = this.props.navigation.getParam('isOnPressFashion');

    const isOnPressTrending = this.props.navigation.getParam('isOnPressTrending');

    //const dataSourceRecommend = this.props.navigation.getParam('dataSourceRecommend');
    //const dataSourceFashion = this.props.navigation.getParam('dataSourceFashion');
    //const dataSourceTrending = this.props.navigation.getParam('dataSourceTrending');
    const dataSource = this.props.navigation.getParam('dataSource');

    // console.log("Test");
    // console.log(dataSource.dataSourceFashion);
    // console.log("Test1");
    // console.log(dataSource.dataSourceRecommend);
    // console.log("Test3");
    // console.log(dataSource.dataSourceTrending);
    const content = this.props.navigation.getParam('content');
    //console.log(content);
    const categoryID = this.props.categoryID;
    //console.log(categoryID);
    onCategoryPress = () => {
      //alert("hello");
      this.props.navigation.navigate('Category', { dataSourceCategory: dataSource.dataSourceCategory });
    }
    return (
      <View style={styles.container}>
        <Shopping onPressShoppingWomanItem={this.onPressShoppingWomanItem}
          isOnPressWomanRecommend={isOnPressRecommend}
          isOnPressWomanFashion={isOnPressFashion}
          isOnPressWomanTrending={isOnPressTrending}
          onPressButton={this.props.onPressButtonCategoryWoman}
          dataSourceRecommend={dataSource.dataSourceRecommend}
          dataSourceFashion={dataSource.dataSourceFashion}
          dataSourceTrending={dataSource.dataSourceTrending}
          dataSourceCategory={dataSource.dataSourceCategory}
          content={content}
          //dataSource={dataSource}
          onCategoryButton={() => onCategoryPress()}
          categoryID={categoryID} />
        {/* <Text>Hello</Text> */}
      </View>
    );
  }
}

ShoppingWomanScreen.navigationOptions = props => {
  return {
    headerTitle: "Dạo chợ Sen Đỏ",
    headerBackground: (
      <Image
        style={{ width: '100%', height: '100%' }}
        source={{ uri: 'https://img.freepik.com/free-psd/abstract-background-design_1297-82.jpg?size=626&ext=jpg' }}
      />
    ),
    headerTintColor: 'white',
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    //marginLeft: 90
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
})