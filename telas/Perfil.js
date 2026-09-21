import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Perfil({ navigation }) {

  const [nome, setNome] = useState('Usuário FitStep');
  const [email, setEmail] = useState('usuario@email.com');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const salvarPerfil = () => {
    Alert.alert('Perfil', 'Seus dados foram salvos!');
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Meu perfil</Text>

        <Ionicons name="person-outline" size={28} color="#fff" />
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.avatar}>
          <Ionicons name="person" size={55} color="#c0392b" />
        </View>

        <Text style={styles.name}>
          {nome}
        </Text>

        <Text style={styles.email}>
          {email}
        </Text>

        <Text style={styles.label}>Nome</Text>

        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Peso (kg)</Text>

        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={setPeso}
          keyboardType="numeric"
          placeholder="Ex: 60"
        />

        <Text style={styles.label}>Altura (cm)</Text>

        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
          placeholder="Ex: 165"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={salvarPerfil}
        >
          <Ionicons name="save-outline" size={25} color="#fff" />

          <Text style={styles.buttonText}>
            Salvar alterações
          </Text>
        </TouchableOpacity>

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
    padding: 25,
    alignItems: 'center',
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  name: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 15,
  },

  email: {
    color: '#777',
    marginBottom: 25,
  },

  label: {
    width: '100%',
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 6,
  },

  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#c0392b',
    width: '100%',
    padding: 17,
    borderRadius: 15,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});