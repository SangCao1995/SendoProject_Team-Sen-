import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var gender = [
    {label: 'Nam', value: 1},
    {label: 'Nữ', value: 2},
    {label: 'Khác', value: 3}
]

export default class QuestionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    onPressButton = async (value) => {
        //console.log(value);
        await this.setState({
            value: value
        });
        
    }
    onPressT = () => {
        this.props.navigation.navigate('Shop', {data: this.state.value});
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>Bạn là Nam hay Nữ</Text>
                <RadioForm
                    radio_props={gender}
                    initial={2}
                    onPress={(value) => { 
                        //console.log(value);
                        this.onPressButton(value)}}
                //formHorizontal={true}
                //labelHorizontal={true}
                />
                <TouchableOpacity onPress={() => {this.onPressT()}}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200
    }
})