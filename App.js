import { StyleSheet, Text, View, Platform, TouchableOpacity, Alert, PermissionsAndroid } from 'react-native';

import { useState, useEffect, useRef } from 'react';
import { BleManager} from 'react-native-ble-plx';
import { Buffer} from 'buffer';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const SERVICE_UUID =  "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
const CHARACTERISTIC_UUID = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
const DEVICE_MAIL = "ESP32-CAM-Robot";
const SEND_INTERVAL_MS= 150;

function toBase64(texto) {
  return Buffer.from(texto, 'utf-8').toString('base64');

}
export default function App() {
   //Valores que persistem re-renderização, mas não disparam
    //re-render quando mudam

    const bleManagerRef = useRef(null);
    const connectedDeviceRef = useRef(null);
    const sendIntervalRef = useRef(null);
    
    const [connectionStatus, setConnectionStatus] = useState('desconectado')
    const [activeDir, setActiveDir] = useState('stop');

    const requestPermission = async () => {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCANS,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCES_FINE_LOCATION,

        ]);
      }
    };

    useEffect(()=> {
      bleManagerRef.current = new BleManager();
      //Gerenciar funções do dispositivO
      requestPermission();
      //Chamar função de cancelamento do set interval

    }, []);

    const connectToRobot = () => {
      if (!bleManagerRef.current){
        return;
      }

      setConnectionStatus('procurando');
      bleManagerRef.current.startDeviceScan(
        null, 
        null,
        async (error, device) => {
          if(error) {
            console.log('erro no scan:', error);
            setConnectionStatus('desconectado');
            return;
          }

          if (device && device.name === DEVICE_NAME){
            bleManagerRef.current.stopDeviceScan();

             try {
                const connected = await device.connect();
                await connected.discoverAllServicesAndCharacteristics();
                connectedDeviceRef.current = connect;
                setConnectionStatus('conectado');

                connected.onDisconnected(()=>{
                  setConnectionStatus('disconectado');
                  connectedDeviceRef.current = null;
                  //Chamar função de cancelamento do set interval


                })
             } catch (error) {
                Alert.alert('Erro ao conectar', error.message);
                setConnectionStatus('Desconectado');
              
             }
          }
        }
      )

      setTimeOut(() => {
        if(connectionStatus!== 'conectado') {
            bleManagerRef.current?.stopDeviceScan();

        }
      }, 10000);
    }
  return (
    <View >
      
    </View>
  );
}

