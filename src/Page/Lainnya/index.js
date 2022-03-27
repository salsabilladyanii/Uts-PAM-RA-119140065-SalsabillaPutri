import {Text, StyleSheet, View, Modal, Alert} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Lainnya extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      selectedLanguage: '',
      modalVisible: true,
    };
  }
  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  render() {
    const {modalVisible} = this.state;
    return (
      <View
        style={{
          backgroundColor: 'gray',

          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: 'darkblue',
            padding: 30,
            alignItems: 'center',
            flex: 0.04,
          }}>
          <Text style={{color: 'white'}}>Daftar Pembatalan</Text>
        </View>
        <View
          style={{alignItems: 'center', justifyContent: 'center', flex: 0.5,marginTop:100,marginHorizontal:20,backgroundColor:'white'}}>
          <View style={{padding: 40}}>
            <Text style={{color: 'black', alignSelf: 'center'}}>Menu</Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  borderWidth: 1,
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  marginHorizontal: 10,
									paddingVertical: 10,
                }}>
                <Icon
                  name="search"
                  size={30}
                  color="black"
                  style={{alignSelf: 'center'}}
                />
                <Text style={{color: 'black'}}>Cek Pemesanan</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  justifyContent: 'center',
                  paddingHorizontal: 34,
                  marginHorizontal: 10,
									paddingVertical: 10,
                }}>
                <Icon
                  name="user"
                  size={30}
                  color="green"
                  style={{alignSelf: 'center'}}
                />
                <Text style={{color: 'black'}}>Detail Profile</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  borderWidth: 1,
                  justifyContent: 'center',
                  paddingHorizontal: 16,
                  marginHorizontal: 10,
                  marginTop: 20,
                  paddingVertical: 10,
                }}>
                <Icon
                  name="phone"
                  size={30}
                  color="red"
                  style={{alignSelf: 'center'}}
                />
                <Text style={{color: 'black'}}>Hubungi Kami</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  marginHorizontal: 10,
                  marginTop: 20,
									paddingVertical: 10,
                }}>
                <Icon
                  name="history"
                  size={30}
                  color="green"
                  style={{alignSelf: 'center'}}
                />
                <Text style={{color: 'black'}}>Riwayat Pemesanan</Text>
              </View>
            </View>
          </View>
          
        </View>
				<Text style={{color: 'darkblue',alignSelf:'center'}}>
            Tidak Ada Aktivitas Pembatalan Tiket
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor:'red',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    // padding: 35,
    // paddingLeft: 15,
    height: 180,
    width: 260,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
