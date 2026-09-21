import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Metas({ navigation }) {

  const [meta, setMeta] = useState('8000');

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Metas</Text>

        <Ionicons name="trophy-outline" size={28} color="#fff" />
      </View>

      <View style={styles.content}>

        <Ionicons name="trophy-outline" size={70} color="#c0392b" />

        <Text style={styles.mainTitle}>
          Meta diária de passos
        </Text>

        <Text style={styles.description}>
          Defina quantos passos você deseja realizar por dia.
        </Text>

        <TextInput
          style={styles.input}
          value={meta}
          onChangeText={setMeta}
          keyboardType="numeric"
          placeholder="Quantidade de passos"
        />

        <View style={styles.currentGoal}>
          <Text style={styles.goalLabel}>
            Sua meta atual
          </Text>

          <Text style={styles.goalNumber}>
            {meta || '0'} passos
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="checkmark-circle-outline" size={25} color="#fff" />
          <Text style={styles.buttonText}>
            Salvar meta
          </Text>
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
    padding: 25,
    alignItems: 'center',
  },

  mainTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },

  description: {
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
  },

  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 25,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  currentGoal: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 18,
    marginTop: 15,
    alignItems: 'center',
  },

  goalLabel: {
    color: '#777',
  },

  goalNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#8bc34a',
  },

  button: {
    backgroundColor: '#c0392b',
    width: '100%',
    padding: 18,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 8,
  },
});