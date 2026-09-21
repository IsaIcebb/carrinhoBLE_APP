import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MeuTreino({ navigation }) {
  const [tempo, setTempo] = useState(0);
  const [treinando, setTreinando] = useState(false);

  useEffect(() => {
    let intervalo;

    if (treinando) {
      intervalo = setInterval(() => {
        setTempo(valor => valor + 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [treinando]);

  const formatarTempo = () => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Meu treino</Text>

        <Ionicons name="fitness-outline" size={28} color="#fff" />
      </View>

      <View style={styles.content}>

        <Ionicons
          name="fitness-outline"
          size={80}
          color="#c0392b"
        />

        <Text style={styles.timer}>{formatarTempo()}</Text>

        <Text style={styles.label}>Tempo de treino</Text>

        <View style={styles.stats}>

          <View style={styles.stat}>
            <Ionicons name="footsteps-outline" size={30} color="#8bc34a" />
            <Text style={styles.number}>0</Text>
            <Text style={styles.label}>passos</Text>
          </View>

          <View style={styles.stat}>
            <Ionicons name="flame-outline" size={30} color="#c0392b" />
            <Text style={styles.number}>0</Text>
            <Text style={styles.label}>kcal</Text>
          </View>

        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setTreinando(!treinando)}
        >
          <Ionicons
            name={treinando ? 'stop-circle-outline' : 'play-circle-outline'}
            size={28}
            color="#fff"
          />

          <Text style={styles.buttonText}>
            {treinando ? 'Finalizar treino' : 'Iniciar treino'}
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
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },

  timer: {
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },

  label: {
    color: '#777',
  },

  stats: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 20,
  },

  stat: {
    backgroundColor: '#fff',
    width: 140,
    padding: 20,
    borderRadius: 18,
    alignItems: 'center',
    elevation: 2,
  },

  number: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },

  button: {
    backgroundColor: '#c0392b',
    width: '100%',
    padding: 18,
    borderRadius: 15,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});