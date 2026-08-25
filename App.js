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
      <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
 
        <View>
 
 
        <Text style={styles.titulo}>
          ESP32-Cam (BLE)
        </Text>
 
        <touchableOpacity
          onPress={connectToRobot}
          style={styles.connectBtn}
       > </touchableOpacity>
 
        style={styles.connectBtn}
 
       <Text style={styles.connectBtnText}>
        {
          connectionStatus === 'conectado' ? 'Conectado!':
          connectionStatus === ' procurando' ? 'Procurando':
          'Desconectado'
 
        }
 
        </Text>
        </View>
        <View style={styles.Constrols}>
          <View style={styles.row}>
            <ControlButton
              label="⬆"
              dirCode="F"
              dirLabel="foward"
              activeDir={activeDir}
              onPress={startCommand}
              onRelease={stopCommand}
            />
            <ControlButton
              label="⬅"
              dirCode="L"
              dirLabel="left"
              activeDir={activeDir}
              onPress={startCommand}
              onRelease={stopCommand}
            />

            <TouchableOpacity style={[styles.dpadBtn, style.stopBtn]}
            onPress={stopCommand}>
              <Text style={styles.dpadBtnText}>🟪</Text>
              </TouchableOpacity>

              <ControlButton
              label="➡️"
              dirCode="R"
              dirLabel="right"
              activeDir={activeDir}
              onPress={startCommand}
              onRelease={stopCommand}
            />
            </View>
             <View style={styles.row}>
            <ControlButton
              label="⬇"
              dirCode="F"
              dirLabel="foward"
              activeDir={activeDir}
              onPress={startCommand}
              onRelease={stopCommand}
            />
            </View>
        </View>
       
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
 
function ControlButton (
  {
    label,
    dirCode,
    dirLabel,
    activeDir,
    onPress,
    onRelease
  }
); {
    const isActive = activeDir === dirLabel;
 
}
return (
  <TouchableOpacity style=[(style.dpadBtn, isActive && style.dpadBtnActive)] 
  onPressIn={() => onPress(dirCode, dirLabel)}
  onPressOut={onRelease}
  activeOpacity={0.7}
  >

    </TouchableOpacity>
)
 const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff6f2' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#622019' },
  connectBtn: { padding: 8, backgroundColor: '#eee', borderRadius: 8 },
  connectBtnText: { fontSize: 13, color: '#333' },
  warningBanner: { backgroundColor: '#fff3cd', padding: 8, marginHorizontal: 16, borderRadius: 8 },
  warningText: { color: '#7a5c00', fontSize: 12, textAlign: 'center' },
  speedContainer: { paddingHorizontal: 24, marginTop: 20 },
  speedLabel: { fontSize: 14, color: '#333', marginBottom: 4 },
  controls: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  row: { flexDirection: 'row', gap: 12, marginVertical: 6 },
  dpadBtn: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#622019',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dpadBtnActive: { backgroundColor: '#BA9C72' },
  stopBtn: { backgroundColor: '#a00' },
  dpadBtnText: { fontSize: 28, color: '#fff', fontWeight: 'bold' },
});
 

