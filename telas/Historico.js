import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Historico({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Histórico</Text>

        <Ionicons name="stats-chart-outline" size={28} color="#fff" />
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.subtitle}>
          Seus últimos treinos
        </Text>

        <View style={styles.card}>
          <View style={styles.icon}>
            <Ionicons name="fitness-outline" size={28} color="#c0392b" />
          </View>

          <View style={styles.info}>
            <Text style={styles.date}>Hoje</Text>
            <Text style={styles.details}>
              32 minutos • 2.450 passos
            </Text>
          </View>

          <Text style={styles.calories}>98 kcal</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.icon}>
            <Ionicons name="fitness-outline" size={28} color="#c0392b" />
          </View>

          <View style={styles.info}>
            <Text style={styles.date}>Ontem</Text>
            <Text style={styles.details}>
              25 minutos • 1.920 passos
            </Text>
          </View>

          <Text style={styles.calories}>77 kcal</Text>
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

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 18,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f5eeee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  date: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  details: {
    color: '#777',
    marginTop: 4,
  },

  calories: {
    fontWeight: 'bold',
    color: '#c0392b',
  },
});