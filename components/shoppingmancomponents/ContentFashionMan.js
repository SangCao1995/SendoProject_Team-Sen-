import React from 'react';
import {ScrollView, FlatList, StyleSheet} from 'react-native';
import {ContentFashionManData} from '../../constants/ManData/ContentFashionManData';
import ItemContentFashionMan from './ItemContentFashionMan';

const numColumns = 2;

export default class ContentFashionMan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ContentFashionManData
        }
    }
    render() {
        return(
            <ScrollView contentContainerStyle={styles.scrollview}>
                <FlatList data={this.state.data}
                        renderItem={({ item }) => (
                            <ItemContentFashionMan item={item}/>
                        )}
                        numColumns={numColumns}
                        keyExtractor={(item,index) => index.toString()}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: '#F2F2F2'
    }
})