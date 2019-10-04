import React from 'react';
import { Text, View, Image, StyleSheet,TouchableOpacity,Picker, ScrollView } from 'react-native';
import ColorOption from '../components/ColorOption';


export default function ProductDetailScreen(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageView}>
                <Image
                    style={styles.imageDetail}
                    source={{ uri: 'https://file.yes24.vn/Upload/ProductImage/minhchau2017/1837023_L.png' }}
                />
            </View>

            <View style={styles.titleView}>
                <Text style={styles.textTitle}>Đầm DL10078-2</Text>
                <Text style={styles.textPrice}>19.000 VND</Text>
            </View>

            <View style={styles.colorOption}>
                <ColorOption/>
            </View>

            <View style={styles.productInfo} >
                <Text style={styles.titleInfo}>Chi tiết sản phẩm</Text>
                <Text style={styles.scriptInfo}>
                Nineshop chuyên bán các sản phẩm thời trang nữ,
                 đồ lót, đồ ngủ, đồ bơi,túi xách, balo các loại. 
                 Các sản phẩm đa dạng được lựa chọn tỉ mỉ, cẩn thận về kiểu dáng và mẫu mã phù hợp 
                 với nhiều lứa tuổi phái đẹp. Nhiều mẫu thiết kế tâm huyết không những đẹp mắt, hợp thời 
                 trang mà sản phẩm còn có nhiều tính năng tiện ích, chất liệu vải cao cấp thoải mái nhất cho người mặc.
                  Bắt kịp xu hướng thời trang, ở nineshop có đa dạng kiểu mẫu cho các nàng lựa chọn từ những cô nàng yêu thích sự nhẹ nhàng,
                   yêu kiều cho đến những cô nàng dễ thương, nhí nhảnh hay sexy, gợi cảm táo bạo đều có thể lựa chọn được sản phẩm ưng ý.
                </Text>
            </View>
            <TouchableOpacity style={styles.visitShop}>
            <Image
                    style={styles.imageShop}
                    source={{ uri: 'https://miro.medium.com/max/2400/0*Q_OW5YQ2ZfxZLn6H.png' }}
                />
                <View  style={styles.infoShop}>
                    <Text style={styles.nameShop}>Uniqlo Vietnam</Text>
                    <Text style={styles.localShop}>TP. Ho Chi Minh</Text>
                </View>
 
            </TouchableOpacity>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F2'
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    imageDetail: {
        borderRadius: 15,
        width: 370,
        height: 400,
        maxWidth: 370,
        maxHeight: 400,
        marginVertical: 5,
        marginHorizontal: 100,
        resizeMode: 'contain',
        
    },
    titleView: {
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%'
    },
    textTitle: {
        justifyContent: 'flex-start',
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 22,
        marginLeft: '4%'
    },
    textPrice: {
        marginLeft: '4%',
        color: '#D90429',
        fontWeight: '600',
        fontSize: 24,
        borderRadius: 50,
    },
    colorOption: {
        marginTop: 5,
        marginHorizontal: 20,
        marginVertical: 5,
        width: '98%',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    productInfo: {
        marginHorizontal: 20,
        marginVertical: 5,
        width: '98%',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    titleInfo: {
        marginTop: '6.5%',
        marginBottom: '5%',
        marginLeft: '2%',
        textDecorationStyle: 'solid',
        fontStyle: 'italic',
        fontSize: 18,
        fontWeight: '100',
        lineHeight: 22,
    },
    scriptInfo: {
        marginLeft: '2%',
        marginBottom: '5%'
    },
    visitShop:{
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        marginLeft: '4%',
        marginHorizontal: 20,
        marginVertical: 5,
        backgroundColor:'white',
        width: '98%',
        height:70,
    },
    imageShop:{
        marginLeft:'4%',
        width:56,
        height:56
    },
    infoShop:{
        marginLeft:'2%',
    },
    nameShop:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize:14,
        lineHeight:22
    },
    localShop:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize:11,
        lineHeight:11
    }
    
})