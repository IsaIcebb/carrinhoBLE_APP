import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Configuracoes({ navigation }) {

  const [notificacoes, setNotificacoes] = useState(true);
  const [somTreino, setSomTreino] = useState(true);
  const [vibracao, setVibracao] = useState(true);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Configurações</Text>

        <Ionicons name="settings-outline" size={28} color="#fff" />
      </View>

      <View style={styles.content}>

        <Text style={styles.section}>
          Preferências
        </Text>

        <View style={styles.option}>
          <View style={styles.optionInfo}>
            <Ionicons name="notifications-outline" size={25} color="#c0392b" />

            <View>
              <Text style={styles.optionTitle}>
                Notificações
              </Text>

              <Text style={styles.description}>
                Receber lembretes de atividade
              </Text>
            </View>
          </View>

          <Switch
            value={notificacoes}
            onValueChange={setNotificacoes}
          />
        </View>

        <View style={styles.option}>
          <View style={styles.optionInfo}>
            <Ionicons name="volume-medium-outline" size={25} color="#c0392b" />

            <View>
              <Text style={styles.optionTitle}>
                Som durante o treino
              </Text>

              <Text style={styles.description}>
                Sons de início e finalização
              </Text>
            </View>
          </View>

          <Switch
            value={somTreino}
            onValueChange={setSomTreino}
          />
        </View>

        <View style={styles.option}>
          <View style={styles.optionInfo}>
            <Ionicons name="phone-portrait-outline" size={25} color="#c0392b" />

            <View>
              <Text style={styles.optionTitle}>
                Vibração
              </Text>

              <Text style={styles.description}>
                Vibrar durante interações
              </Text>
            </View>
          </View>

          <Switch
            value={vibracao}
            onValueChange={setVibracao}
          />
        </View>

        <TouchableOpacity
          style={styles.about}
          onPress={() => {}}
        >
          <Ionicons name="information-circle-outline" size={25} color="#c0392b" />

          <Text style={styles.aboutText}>
            Sobre o FitStep
          </Text>

          <Ionicons name="chevron-forward" size={22} color="#777" />
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
    padding: 20,
  },

  section: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  option: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },

  optionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    flex: 1,
  },

  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  description: {
    color: '#777',
    marginTop: 3,
  },

  about: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  aboutText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
});