import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
	Alert
} from 'react-native';
import React, {Component} from 'react';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
import {kapal} from '../../Asset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment'
import 'moment/locale/id'

export default class Beranda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      selectedLanguage: '',
      modalVisible: false,
			modalVisiblepawal:false,
			modalVisiblelayanan:false,
			pajan:'Pelabuhan Tujuan',
			pawal:'Pelabuhan Awal',
			layanan:'Pilih Layanan',
			date:new Date(),
			time:new Date(),
			open:false,
			opentime:false,
    };
  }
  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };
  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
	setModalVisiblepawal = visible => {
    this.setState({modalVisiblepawal: visible});
  };
	setModalVisiblelayanan = visible => {
    this.setState({modalVisiblelayanan: visible});
  };
	setOpen = perintah=>{
		this.setState({open:perintah})
	}
	setDate = perintah=>{
		console.log(perintah)
		this.setState({date:perintah})
	}
	setOpenTime = perintah=>{
		this.setState({opentime:perintah})
	}
	setTime = perintah=>{
		console.log(perintah)
		this.setState({time:perintah})
	}
	submitdata= async()=>{
		const data = {
			pelwal:this.state.pawal,
			pejan:this.state.pajan,
			layanan:this.state.layanan,
			tanggal:moment(this.state.date).format('LL'),
			waktu:moment(this.state.time).format('LT'),
		}
		try {
			console.log(data)
		const jsonValue = JSON.stringify(data)
		console.log(jsonValue)
		await AsyncStorage.setItem('datapesanan', jsonValue)
		this.props.navigation.navigate('Rincian')
		}catch (e){
			console.log(e)
			
		}
	}
  render() {
    const {modalVisible} = this.state;
		const {modalVisiblepawal} = this.state;
		const {modalVisiblelayanan} = this.state;
    return (
      <View style={{backgroundColor: 'white', margin: 20,flex: 1}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
							<View style={{backgroundColor:'orange',padding: 10}}>
							<Text>Pilih Pelabuhan</Text>
							</View>
              <View style={{paddingLeft:15}}>
							<Pressable
                onPress={() =>
                  this.setState({pajan: 'Bakauheni', modalVisible: false})
                }
								style={{marginBottom:20}}
								>
                <Text style={{color:'black'}}>Lampung</Text>
                <Text style={{fontSize:20,color:'black'}}>Bakauheni</Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  this.setState({pajan: 'Merak', modalVisible: false})
                }>
                <Text style={{color:'black'}}>Jawa</Text>
                <Text style={{fontSize:20,color:'black'}}>Merak</Text>
              </Pressable>
							</View>
              {/* <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
            </View>
          </View>
        </Modal>
				<Modal
          animationType="slide"
          transparent={true}
          visible={modalVisiblepawal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisiblepawal(!modalVisiblepawal);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
							<View style={{backgroundColor:'orange',padding: 10}}>
							<Text>Pilih Pelabuhan</Text>
							</View>
              <View style={{paddingLeft:15}}>
							<Pressable
                onPress={() =>
                  this.setState({pawal: 'Bakauheni', modalVisiblepawal: false})
                }
								style={{marginBottom:20}}
								>
                <Text style={{color:'black'}}>Lampung</Text>
                <Text style={{fontSize:20,color:'black'}}>Bakauheni</Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  this.setState({pawal: 'Merak', modalVisiblepawal: false})
                }>
                <Text style={{color:'black'}}>Jawa</Text>
                <Text style={{fontSize:20,color:'black'}}>Merak</Text>
              </Pressable>
							</View>
              {/* <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
            </View>
          </View>
        </Modal>
				<Modal
          animationType="slide"
          transparent={true}
          visible={modalVisiblelayanan}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisiblelayanan(!modalVisiblelayanan);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
							<View style={{backgroundColor:'orange',padding: 10}}>
							<Text>Pilih Pelabuhan</Text>
							</View>
              <View style={{paddingLeft:15}}>
							<Pressable
                onPress={() =>
                  this.setState({layanan: 'Express', modalVisiblelayanan: false})
                }
								style={{marginBottom:20}}
								>
                <Text style={{color:'black'}}>Layanan</Text>
                <Text style={{fontSize:20,color:'black'}}>Express</Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  this.setState({layanan: 'Reguler', modalVisiblelayanan: false})
                }>
                <Text style={{color:'black'}}>Layanan</Text>
                <Text style={{fontSize:20,color:'black'}}>Reguler</Text>
              </Pressable>
							</View>
              {/* <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
            </View>
          </View>
        </Modal>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text style={{color: '#6495ED', fontSize: 35}}>Kapalzy</Text>
        </View>
        <View style={{marginLeft: 15}}>
          <Text style={{color: 'grey', fontSize: 15}}>Pelabuhan Awal</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 15}}>
          <Image source={kapal} style={{height: 35, width: 35}} />
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgray',
              width: 230,
              marginLeft: 15,
              paddingLeft: 15,
              justifyContent: 'center',
            }}
						onPress={() => this.setModalVisiblepawal(true)}
						>
            <Text style={{color: 'black'}}>{this.state.pawal}</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 15, marginTop: 25}}>
          <Text style={{color: 'grey', fontSize: 20}}>Pelabuhan Tujuan</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 15}}>
          <Image source={kapal} style={{height: 35, width: 35}} />
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgray',
              width: 230,
              marginLeft: 15,
              paddingLeft: 15,
              justifyContent: 'center',
            }}
						onPress={() => this.setModalVisible(true)}
						>
            <Text style={{color: 'black'}}>{this.state.pajan}</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 15, marginTop: 25}}>
          <Text style={{color: 'grey', fontSize: 15}}>Kelas Layanan</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 15}}>
          <Image source={kapal} style={{height: 35, width: 35}} />
					<TouchableOpacity
            style={{
              backgroundColor: 'lightgray',
              width: 230,
              marginLeft: 15,
              paddingLeft: 15,
              justifyContent: 'center',
            }}
						onPress={() => this.setModalVisiblelayanan(true)}
						>
            <Text style={{color: 'black'}}>{this.state.layanan}</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 15, marginTop: 25}}>
          <Text style={{color: 'grey', fontSize: 20}}>
            Tanggal Masuk Pelabuhan
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 15}}>
          <Image source={kapal} style={{height: 35, width: 35}} />
					<DatePicker
							modal
							open={this.state.open}
							date={this.state.date}
							onConfirm={(date) => {
								this.setOpen(false)
								this.setDate(date)
							}}
							onCancel={() => {
								this.setOpen(false)
							}}
						/>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgray',
              width: 230,
              marginLeft: 15,
              paddingLeft: 15,
              justifyContent: 'center',
            }}
						onPress={() => this.setOpen(true)}
						>
            <Text style={{color: 'black'}}>{moment(this.state.date).format('LL')}</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 15, marginTop: 25}}>
          <Text style={{color: 'grey', fontSize: 20}}>Jam Masuk Pelabuhan</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 15}}>
          <Image source={kapal} style={{height: 35, width: 35}} />
          <DatePicker
							modal
							open={this.state.opentime}
							mode='time'
							date={this.state.time}
							onConfirm={(date) => {
								this.setOpenTime(false)
								this.setTime(date)
							}}
							onCancel={() => {
								this.setOpenTime(false)
							}}
						/>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgray',
              width: 230,
              marginLeft: 15,
              paddingLeft: 15,
              justifyContent: 'center',
            }}
						onPress={() => this.setOpenTime(true)}
						>
            <Text style={{color: 'black'}}>{moment(this.state.time).format('LT')}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: 'lightgray',
            marginHorizontal: 20,
            marginTop: 25,
						marginBottom:20,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black'}}>Dewasa</Text>
            <Text style={{color: 'black'}}>1 Orang</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: 'orange',
            marginHorizontal: 50,
            borderRadius: 15,
          }}
					onPress={() => this.submitdata()}
					>
          <Text>Buat Tiket</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInput: {
    padding: 1,
    marginBottom: 1,
    marginLeft: 15,
    paddingLeft: 15,
    // paddingHorizontal: 100,
    width: 230,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    // borderBottomWidth: 3,
    borderWidth: 3,
  },
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
		height:180,
		width:260,
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
