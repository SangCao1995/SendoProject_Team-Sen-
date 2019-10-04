import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image, Alert, AsyncStorage, TextInput, Button } from 'react-native';
import * as Facebook from 'expo-facebook';
import Expo from 'expo';
import * as Google from 'expo-google-app-auth';
import ProfileScreen from './ProfileScreen';

//import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      email: '46D42B19EA8B96793A9F544460723A63',
      password: '123456',
      error: '',
      loading: false,
      array: []
    }
  }

  

  onLoginPress() {

    this.setState({ error: '', loading: true });

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '', loading: false });
        this.props.navigation.navigate('Main');

      })
      .catch(() => {
        this.setState({ error: 'Authentication failed', loading: false });

      })

  }
  renderButtonOrLoading() {
    if (this.state.loading) {
      return <Text> Loading </Text>
    }
    return <View>
      <Button
        onPress={this.onLoginPress.bind(this)}
        title='Login' />
      <Button
        onPress={this.onSignUpPress.bind(this)}
        title='Sign up' />

    </View>

  }
  onFacebookLoginPress = async () => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('2150964201677030', {
        permissions: ['public_profile'],
      });
      console.log(type);
      if (type === 'success') {
        console.log(type);
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture,gender`);
        //.then(r => r.json());
        //response.then(userInfo => console.log(userInfo));
        this.state.userInfo = await response.json();
        //console.log(this.state.userInfo);
        this.setState({
          userInfo: this.state.userInfo
        });
        await AsyncStorage.setItem('@token', token);
        this.props.navigation.navigate("Main");
        Alert.alert('Logged in!', `Hi ${this.state.userInfo.name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  onGoogleLoginPress = async () => {
    //alert("hi");
    try {
      const {type, accessToken, user} = await Google.logInAsync({
        androidClientId: `76641770158-66ur9cr372lnembbfmepf5hsldd92fgh.apps.googleusercontent.com`,
        scopes: ['profile', 'email'],
      });
      //console.log(accessToken);
      if (type === 'success') {
        //console.log("hehe");
        await AsyncStorage.setItem('@token', accessToken);
        this.props.navigation.navigate('Main');
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  // renderUserInfo = () => {
  //     console.log(this.state.userInfo.gender);
  //     return(
  //         <View>
  //             <Image style={{width: 20, height: 20}} 
  //             source={{uri: this.state.userInfo.picture.data.url}}/>
  //             <Text>{this.state.userInfo.name}</Text>
  //             <Text>{this.state.userInfo.id}</Text>
  //             <Text>{this.state.userInfo.gender}</Text>
  //         </View>
  //     );
  // }
  
  onPressLoginButton = async () => {
    var flag = false;
    const response = await fetch(`https://raw.githubusercontent.com/emonno13/jsontest/master/users.json?fbclid=IwAR2hv8OVpogcBa42FejsP1UIjTmgyXkSRLxEmjjB-xV7TmM1ftZXjAPCews`);
    const jsonData = await response.json();
    // = jsonData;
    console.log(jsonData[500].user_id);
    for(var i = 0; i < jsonData.length; i++) {
      if(this.state.email === jsonData[i].user_id && this.state.password === '123456') {
        flag = true;
      }
    }
    if(flag === true) {
      console.log("Success");
      await AsyncStorage.setItem('@token', '69');
      this.props.navigation.navigate('Main');
      
    }
    else {
      console.log("Failed");
    }
    // jsonData.map(item => {
    //   if(this.state.email === item.user_id) {
    //     console.log("Success");
    //   }
    //   else {
    //     console.log("Failed");
    //   }
    // })
    
    console.log(this.state.email);
  }
  render() {
    return (
      <View style={styles.container}>
        {/* {!this.state.userInfo ? (<TouchableOpacity style={styles.button}
            onPress={() => this.onPressButton()}>
                <Text>Login Facebook</Text>
            </TouchableOpacity>) : (this.renderUserInfo())} */}
        <Text style={styles.title}>Đăng nhập vào Sendo</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="User ID"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.loginButton} onPress={() => this.onPressLoginButton()}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Hoặc đăng nhập bằng</Text>
        <View style={styles.loginFacebookGoogleWrapper}>
          <TouchableOpacity style={styles.facebookButton} onPress={() => this.onFacebookLoginPress()}>
            <Image style={styles.facebookIcon}
            source={require('../assets/images/facebook_icon.jpg')}/>
            <Text style={styles.facebookText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton} onPress={() => this.onGoogleLoginPress()}>
            <Image style={styles.googleIcon}
            source={require('../assets/images/google_icon.png')}/>
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    color: 'white',
    fontSize: 30
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 320,
    backgroundColor: 'white',
    marginTop: 8,
    padding: 8,
    borderRadius: 10
  },
  loginButton: {
    marginTop: 8,
    width: 320,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    height: 50
  },
  loginText: {
    padding: 8,
    fontSize: 15,
    fontWeight: 'bold',
  },
  facebookButton: {
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#3b5998',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5
  },
  facebookIcon: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    margin: 5
  },
  facebookText: {
    color: 'white',
    padding: 7
  },
  googleButton: {
    width: 150,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 20
  },
  googleIcon: {
    width: 20,
    height: 20,
    margin: 7
  },
  googleText: {
    padding: 7
  },
  loginFacebookGoogleWrapper: {
    flexDirection: 'row',
    marginTop: 10
  },
  text: {
    color: 'white',
    marginTop: 10
  }
})