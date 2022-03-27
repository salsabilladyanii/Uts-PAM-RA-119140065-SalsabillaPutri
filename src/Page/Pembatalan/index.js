import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Pembatalan extends Component {
  render() {
    return (
      <View
			style={{
				backgroundColor: 'white',

				flex: 1}}
			>
				<View style={{backgroundColor:'darkblue',padding:30,alignItems:'center',flex:0.04}}>
					<Text style={{color:'white'}}>Daftar Pembatalan</Text>
				</View>
        <View style={{alignItems:'center',justifyContent:'center',flex:0.8}}>
					<Text style={{color:'darkblue'}}>Tidak Ada Aktivitas Pembatalan Tiket</Text>
				</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})