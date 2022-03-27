import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity,Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Rincian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('datapesanan');
      this.setState({
        data: JSON.parse(jsonValue),
      });
      // console.log(jsonValue != null ? JSON.parse(jsonValue) : null);
      console.log(JSON.parse(jsonValue));
      console.log('data');
      console.log(this.state.data);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('datapesanan');
      this.setState({
        data: JSON.parse(jsonValue),
      });
      // console.log(jsonValue != null ? JSON.parse(jsonValue) : null);
      console.log(JSON.parse(jsonValue));
      console.log('data');
      console.log(this.state.data);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  // <Text style={{color: 'black'}}>{this.state.data.pelwal}</Text>
  // 			<Text style={{color: 'black'}}>{this.state.data.pejan}</Text>
  // 			<Text style={{color: 'black'}}>{this.state.data.layanan}</Text>
  // 			<Text style={{color: 'black'}}>{this.state.data.tanggal}</Text>
  // 			<Text style={{color: 'black'}}>{this.state.data.waktu}</Text>
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          margin: 20,
          marginBottom: 120,
          flex: 1,
					paddingHorizontal:20
        }}>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text style={{color: '#6495ED', fontSize: 35}}>Kapalzy</Text>
        </View>
        <Text style={{color: 'black',fontWeight:'bold'}}>Kuota tersedia (10000)</Text>
        <Text style={{color: 'black',fontWeight:'bold'}}>Rincian Tiket</Text>
        <View
          style={{
            width: 290,
            height: 200,
            backgroundColor: 'lightgray',
            padding: 20,
						marginVertical:20
          }}>
						
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black',fontWeight:'bold'}}>{this.state.data.pelwal}</Text>
						<Icon name="arrow-right" size={20} color="black" style={{marginHorizontal:60}} />
            <Text style={{color: 'black',fontWeight:'bold'}}>{this.state.data.pejan}</Text>
          </View>
          <Text style={{color: 'black',fontWeight:'bold'}}>Jadwal Masuk Pelabuhan</Text>
          <Text style={{color: 'black'}}>{this.state.data.tanggal}</Text>
          <Text style={{color: 'black'}}>{this.state.data.waktu}</Text>
					<Text style={{color: 'black',fontWeight:'bold'}}>Layanan</Text>
          <Text style={{color: 'black'}}>{this.state.data.layanan}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderTopWidth: 2,
              borderColor: 'gray',
							marginTop:30
            }}>
            <Text style={{color: 'black'}}>Dewasa x 1</Text>
            <Text style={{color: 'black'}}>Rp 65.000,00</Text>
          </View> 
        </View>
				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black',fontWeight:'bold'}}>Total</Text>
            <Text style={{color: 'black',fontWeight:'bold'}}>Rp 65.000</Text>
          </View>
					<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
					<Pressable
              onPress={() => this.props.navigation.navigate('MyTabs')}
              style={({pressed}) => [
                {backgroundColor: pressed ? '#26387F' : '#FFFFFF'},
                styles.wrapperCustom,
              ]}>
              <View style={styles.kotakmenu}>
                <Text style={{color:'blue'}}>Kembali</Text>
              </View>
            </Pressable>
						<Pressable
              onPress={() => this.props.navigation.navigate('Pesanan')}
              style={({pressed}) => [
                {backgroundColor: pressed ? '#26387F' : '#FFFFFF'},
                styles.wrapperCustom,
              ]}>
              <View style={styles.kotakmenu}>
                <Text style={{color:'blue'}}>Lanjutkan</Text>
              </View>
            </Pressable>
					</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	wrapperCustom:{
		borderRadius: 5,
		borderWidth: 1,
		borderColor:'blue',
		padding:10,
		paddingHorizontal:20,
		marginHorizontal:20
	},
	kotakmenu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
