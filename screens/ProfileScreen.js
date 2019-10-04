import React from 'react';
import {View, Text, TouchableOpacity, AsyncStorage, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import LogoTitle from '../components/LogoTitle';





export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: null
        }
    }
    onLogoutPress = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Indicator');
    }
    render() {
        const data = this.props.navigation.getParam('increaseCount');
        //const name = this.props.navigation.getParam('userID', 'Peter');
        //console.log(data);
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.logoutButton}
                onPress={() => this.onLogoutPress()}>
                    <Text style={styles.logoutText}>Đăng xuất</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
} 

ProfileScreen.navigationOptions = props => {
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutButton: {
        width: 320,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        height: 50
    },
    logoutText: {
        padding: 8,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red'
    },
    headerTitle: {
        //marginLeft: 90
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
})
// function mapStateToProps(state) {
//     return {myValue: state.email}
// }

// export default connect(mapStateToProps)(ProfileScreen)