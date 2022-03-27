import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button, Alert,Modal,Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Pesanan extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: {},
			nama:'',
			identitas:'',
			umur:'',
			modalVisible: false,
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
	onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };
// <Text style={{color: 'black'}}>{this.state.data.pelwal}</Text>
  // 			<Text style={{color: 'black'}}>{this.state.data.pejan}</Text>
  // 			<Text style={{color: 'black'}}>{this.state.data.layanan}</Text>
  // 			<Text style={{color: 'black'}}>{this.state.data.tanggal}</Text>
  // 			<Text style={{color: 'black'}}>{this.state.data.waktu}</Text>
	submit= async()=>{
		const data = {
			pelwal:this.state.data.pelwal,
			pejan:this.state.data.pejan,
			layanan:this.state.data.layanan,
			tanggal:this.state.data.waktu,
			waktu:this.state.data.waktu,
			nama:this.state.nama,
			identitas:this.state.identitas,
			umur:this.state.umur
		}
		try {
			console.log(data)
		const jsonValue = JSON.stringify(data)
		console.log(jsonValue)
		await AsyncStorage.setItem('datapesanan', jsonValue)
		this.setState({modalVisible:false})
		this.props.navigation.navigate('MyTabs')
		}catch (e){
			console.log(e)
			
		}
	}
	setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
	render() {
		const {modalVisible} = this.state;
		return (
			<View style={{
				backgroundColor: 'white',
				margin: 20,
				marginBottom: 120,
				flex: 1,
				paddingHorizontal:20
			}}>
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
							<View style={{backgroundColor:'orange',padding: 10,alignItems:'center'}}>
							<Text style={{color:'white'}}>Pembayaran</Text>
							</View>
              <View style={{paddingLeft:15,alignItems:'center'}}>
								<Text style={{color:'black'}}>Transfer Ke Nomor Rekening 8917213****</Text>
							<Pressable
                onPress={() =>
                  this.submit()
                }
								style={{marginBottom:20,backgroundColor:'orange',padding:5,marginTop:50}}
								>
                <Text style={{color:'white'}}>Selesai</Text>
              </Pressable>	
							</View>
            </View>
          </View>
        </Modal>
				<View style={{alignItems: 'center', marginBottom: 20}}>
          <Text style={{color: '#6495ED', fontSize: 35}}>Kapalzy</Text>
        </View>
				<Text style={{color: 'black',fontWeight:'bold'}}>Informasi Pesanan</Text>
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
				<Text style={{color: 'black',fontWeight:'bold'}}>Data Pemesan</Text>
				<Text style={{color: 'black'}}>Nama Lengkap</Text>
				<TextInput
            placeholder="Nama Lengkap"
            style={styles.TextInput}
            value={this.state.nama}
            onChangeText={text => this.onChangeText('nama', text)}
						color="black"
            placeholderTextColor="lightgrey"
          />
					<Text style={{color: 'black'}}>Identitas</Text>
				<TextInput
            placeholder="Identitas"
            style={styles.TextInput}
            value={this.state.identitas}
            onChangeText={text => this.onChangeText('identitas', text)}
						color="black"
            placeholderTextColor="lightgrey"
          />
					<Text style={{color: 'black'}}>Umur</Text>
				<TextInput
            placeholder="Umur"
            style={styles.TextInput}
            value={this.state.umur}
            onChangeText={text => this.onChangeText('umur', text)}
						color="black"
            placeholderTextColor="lightgrey"
          />
				<View style={{paddingHorizontal:40,borderRadius:80}}>
				<Button
				title="Submit"
				color='orange'
				onPress={()=>this.setState({modalVisible:true})}
				/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	TextInput: {
    padding: 10,
    marginBottom: 1,
    backgroundColor:'gray',
    borderColor: 'lightgray',
    borderWidth: 1,
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
})
