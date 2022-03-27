/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Beranda,
  Lainnya,
  Pembatalan,
  PesananSaya,
  Rincian,
  Pesanan,
} from '../Page';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false,
					tabBarLabel: 'Beranda',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
      />
      <Tab.Screen
        name="PesananSaya"
        component={PesananSaya}
        options={{headerShown: false,
					tabBarLabel: 'PesananSaya',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="book" color={color} size={size} />
					),
				}}
      />
      <Tab.Screen
        name="Pembatalan"
        component={Pembatalan}
        options={{headerShown: false,
					tabBarLabel: 'Pembatalan',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="cancel" color={color} size={size} />
					),
				}}
      />
      <Tab.Screen
        name="Lainnya"
        component={Lainnya}
        options={{headerShown: false,
					tabBarLabel: 'Lainnya',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="more" color={color} size={size} />
					),
				}}
      />
    </Tab.Navigator>
  );
}
export default function Router() {
  return (
    <Stack.Navigator initialRouteName="MyTabs">
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lainnya"
        component={Lainnya}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pembatalan"
        component={Pembatalan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PesananSaya"
        component={PesananSaya}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rincian"
        component={Rincian}
        options={{headerShown: false}}
      />
			<Stack.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
