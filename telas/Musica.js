import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';

export default function Musica({ navigation }) {

  const abrirSpotify = async () => {
    try {
      await Linking.openURL('spotify:');
    } catch {
      await Linking.openURL('https://open.spotify.com/');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Música</Text>

        <Ionicons name="musical-notes-outline" size={28} color="#fff" />
      </View>

      <View style={styles.content}>

        <View style={styles.musicIcon}>
          <Ionicons
            name="musical-notes"
            size={70}
            color="#c0392b"
          />
        </View>

        <Text style={styles.mainTitle}>
          Treine ouvindo suas músicas
        </Text>

        <Text style={styles.description}>
          Conecte o FitStep ao Spotify para ouvir suas músicas
          enquanto realiza suas atividades.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={abrirSpotify}
        >
          <Ionicons name="logo-spotify" size={28} color="#fff" />
          <Text style={styles.buttonText}>Abrir Spotify</Text>
        </TouchableOpacity>

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
    flex: 1,
    alignItems: 'center',
    padding: 30,
    justifyContent: 'center',
  },

  musicIcon: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  mainTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
  },

  description: {
    textAlign: 'center',
    color: '#777',
    lineHeight: 22,
    marginTop: 12,
  },

  button: {
    backgroundColor: '#c0392b',
    width: '100%',
    padding: 18,
    borderRadius: 15,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});