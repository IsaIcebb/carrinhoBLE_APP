import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MinhaAtividade({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Minha atividade</Text>

        <Ionicons name="footsteps-outline" size={28} color="#fff" />
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.mainCard}>
          <Ionicons name="footsteps-outline" size={55} color="#8bc34a" />

          <Text style={styles.label}>Passos hoje</Text>

          <Text style={styles.steps}>3.842</Text>

          <Text style={styles.goal}>Meta: 8.000 passos</Text>

          <View style={styles.progressBackground}>
            <View style={styles.progress} />
          </View>
        </View>

        <View style={styles.card}>
          <Ionicons name="flame-outline" size={35} color="#c0392b" />
          <Text style={styles.number}>154 kcal</Text>
          <Text style={styles.description}>Calorias estimadas</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="walk-outline" size={35} color="#8bc34a" />
          <Text style={styles.number}>2,7 km</Text>
          <Text style={styles.description}>Distância percorrida</Text>
        </View>

        <View style={styles.sensor}>
          <Ionicons name="hardware-chip-outline" size={28} color="#8bc34a" />
          <View>
            <Text style={styles.sensorTitle}>Sensor de passos</Text>
            <Text style={styles.sensorStatus}>Ativo</Text>
          </View>
        </View>

      </ScrollView>
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
    padding: 20,
  },

  mainCard: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 3,
  },

  label: {
    color: '#777',
    marginTop: 10,
  },

  steps: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },

  goal: {
    color: '#777',
  },

  progressBackground: {
    width: '100%',
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginTop: 20,
  },

  progress: {
    width: '48%',
    height: 10,
    backgroundColor: '#8bc34a',
    borderRadius: 10,
  },

  card: {
    backgroundColor: '#fff',
    padding: 22,
    borderRadius: 18,
    marginTop: 15,
    elevation: 2,
  },

  number: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 8,
  },

  description: {
    color: '#777',
  },

  sensor: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 18,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  sensorTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  sensorStatus: {
    color: '#8bc34a',
    marginTop: 3,
  },
});
