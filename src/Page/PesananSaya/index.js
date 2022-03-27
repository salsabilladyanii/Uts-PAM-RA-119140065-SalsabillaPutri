import {Text, StyleSheet, View, Button, TouchableOpacity,Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class PesananSaya extends Component {
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
  render() {
    return (
      <View style={{
				backgroundColor: 'white',

				flex: 1,
				// paddingHorizontal:20
			}}
			>
				<View style={{backgroundColor:'darkblue',padding:30,alignItems:'center'}}>
					<Text style={{color:'white'}}>Daftar Pemesanan</Text>
				</View>
				<View
          style={{
            width: 290,
            height: 200,
            backgroundColor: 'lightgray',
            padding: 20,
						marginVertical:20,
						marginLeft:35,
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
        
      </View>
    )
  }
}

const styles = StyleSheet.create({})