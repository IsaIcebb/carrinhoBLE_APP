import { StyleSheet, Text, View, Platform, TouchableOpacity, Alert, PermissionsAndroid } from 'react-native';

import { useState, useEffect, useRef } from 'react';
import { BleManager} from 'react-native-ble-plx';
import { Buffer} from 'buffer';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

const SERVICE_UUID =  "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
const CHARACTERISTIC_UUID = "beb5483e-36e1-4688-b7f5-ea07361b26a8"
const DEVICE_MAIL = "ESP32-CAM-Robot"
export default function App() {
  return (
    <View >
      
    </View>
  );
}

