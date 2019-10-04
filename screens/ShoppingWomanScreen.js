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
    
    
        fetch("https://raw.githubusercontent.com/emonno13/jsontest/master/getCategory.json?fbclid=IwAR0rgTZ1BIgH5nsICONe_xEZU-Ocs_iy-wecip0l7qO0Gq5-Ast4e_JdWYM")
          .then(response => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
              //loading: false,
              dataSource: shuffle(responseJson)
            },
              console.log(this.state.dataSource))
          })
          .catch(error => console.log(error)) //to catch the errors if any   
    
    
        fetch("https://raw.githubusercontent.com/emonno13/jsontest/master/getCategory.json?fbclid=IwAR0rgTZ1BIgH5nsICONe_xEZU-Ocs_iy-wecip0l7qO0Gq5-Ast4e_JdWYM")
          .then(response => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
              //loading: false,
              dataSource1: shuffle(responseJson)
            },
              console.log(this.state.dataSource))
          })
          .catch(error => console.log(error)) //to catch the errors if any  
    
        fetch("https://raw.githubusercontent.com/emonno13/jsontest/master/getCategory.json?fbclid=IwAR0rgTZ1BIgH5nsICONe_xEZU-Ocs_iy-wecip0l7qO0Gq5-Ast4e_JdWYM")
          .then(response => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
              //loading: false,
              dataSource2: shuffle(responseJson)
            },
              console.log(this.state.dataSource))
          })
          .catch(error => console.log(error)) //to catch the errors if any    
        fetch("https://raw.githubusercontent.com/emonno13/jsontest/master/getCategory.json?fbclid=IwAR0rgTZ1BIgH5nsICONe_xEZU-Ocs_iy-wecip0l7qO0Gq5-Ast4e_JdWYM")
          .then(response => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
              //loading: false,
              dataSource3: shuffle(responseJson)
            },
              console.log(this.state.dataSource))
          })
          .catch(error => console.log(error)) //to catch the errors if any
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
            this.props.navigation.navigate('Category', {dataSourceCategory: dataSource.dataSourceCategory});
        }
        return(
            <View style={styles.container}>
                <Shopping isOnPressWomanRecommend={isOnPressRecommend}
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
                categoryID={categoryID}/>
                {/* <Text>Hello</Text> */}
            </View>
        );
    }
}

ShoppingWomanScreen.navigationOptions = props => {
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
        flex: 1
    },
    headerTitle: {
      //marginLeft: 90
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
  },
})