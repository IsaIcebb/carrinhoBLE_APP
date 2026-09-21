import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Dispositivos({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Dispositivos</Text>

        <Ionicons name="bluetooth-outline" size={28} color="#fff" />
      </View>

      <View style={styles.content}>

        <Ionicons
          name="bluetooth-outline"
          size={80}
          color="#c0392b"
        />

        <Text style={styles.mainTitle}>
          Conectar dispositivo
        </Text>

        <Text style={styles.description}>
          Procure dispositivos Bluetooth próximos para conectar
          ao FitStep.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="search-outline" size={25} color="#fff" />
          <Text style={styles.buttonText}>
            Procurar dispositivos
          </Text>
        </TouchableOpacity>

        <View style={styles.status}>
          <Ionicons
            name="radio-outline"
            size={25}
            color="#8bc34a"
          />

          <View>
            <Text style={styles.statusTitle}>
              Bluetooth
            </Text>

            <Text style={styles.statusText}>
              Pronto para conectar
            </Text>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  header: {
    height: 65,
    backgroundColor: '#c0392b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  content: {
    padding: 25,
    alignItems: 'center',
  },

  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },

  description: {
    textAlign: 'center',
    color: '#777',
    marginTop: 10,
    lineHeight: 22,
  },

  button: {
    backgroundColor: '#c0392b',
    width: '100%',
    padding: 18,
    borderRadius: 15,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  status: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 18,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    elevation: 2,
  },

  statusTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  statusText: {
    color: '#8bc34a',
    marginTop: 3,
  },
});