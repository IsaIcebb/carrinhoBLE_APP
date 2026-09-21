import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuAberto(true)}>
          <Ionicons name="menu" size={32} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.logo}>FITSTEP</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Ionicons name="person-circle-outline" size={32} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.greeting}>Olá! 👋</Text>
        <Text style={styles.subtitle}>Vamos cuidar da sua saúde hoje?</Text>

        <View style={styles.stepsCard}>
          <Ionicons name="footsteps-outline" size={45} color="#8bc34a" />

          <Text style={styles.cardTitle}>Passos de hoje</Text>

          <Text style={styles.steps}>3.842</Text>

          <Text style={styles.goal}>de 8.000 passos</Text>

          <View style={styles.progressBackground}>
            <View style={styles.progress} />
          </View>
        </View>

        <View style={styles.row}>

          <View style={styles.smallCard}>
            <Ionicons name="flame-outline" size={30} color="#c0392b" />
            <Text style={styles.number}>154</Text>
            <Text style={styles.label}>kcal</Text>
          </View>

          <View style={styles.smallCard}>
            <Ionicons name="walk-outline" size={30} color="#8bc34a" />
            <Text style={styles.number}>2,7</Text>
            <Text style={styles.label}>km</Text>
          </View>

        </View>

        <TouchableOpacity
          style={styles.trainingButton}
          onPress={() => navigation.navigate('MeuTreino')}
        >
          <Ionicons name="play-circle-outline" size={28} color="#fff" />
          <Text style={styles.trainingText}>Começar treino</Text>
        </TouchableOpacity>

      </ScrollView>

      <Modal
        visible={menuAberto}
        transparent
        animationType="slide"
        onRequestClose={() => setMenuAberto(false)}
      >
        <View style={styles.menuBackground}>

          <View style={styles.menu}>

            <View style={styles.menuHeader}>
              <Text style={styles.menuTitle}>FITSTEP</Text>

              <TouchableOpacity onPress={() => setMenuAberto(false)}>
                <Ionicons name="close" size={30} color="#333" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuAberto(false);
                navigation.navigate('MinhaAtividade');
              }}
            >
              <Ionicons name="footsteps-outline" size={24} color="#c0392b" />
              <Text style={styles.menuText}>Minha atividade</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuAberto(false);
                navigation.navigate('MeuTreino');
              }}
            >
              <Ionicons name="fitness-outline" size={24} color="#c0392b" />
              <Text style={styles.menuText}>Meu treino</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuAberto(false);
                navigation.navigate('Musica');
              }}
            >
              <Ionicons name="musical-notes-outline" size={24} color="#c0392b" />
              <Text style={styles.menuText}>Música</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuAberto(false);
                navigation.navigate('Dispositivos');
              }}
            >
              <Ionicons name="bluetooth-outline" size={24} color="#c0392b" />
              <Text style={styles.menuText}>Dispositivos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuAberto(false);
                navigation.navigate('Historico');
              }}
            >
              <Ionicons name="stats-chart-outline" size={24} color="#c0392b" />
              <Text style={styles.menuText}>Histórico</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuAberto(false);
                navigation.navigate('Metas');
              }}
            >
              <Ionicons name="trophy-outline" size={24} color="#c0392b" />
              <Text style={styles.menuText}>Metas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuAberto(false);
                navigation.navigate('Perfil');
              }}
            >
              <Ionicons name="person-outline" size={24} color="#c0392b" />
              <Text style={styles.menuText}>Meu perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuAberto(false);
                navigation.navigate('Configuracoes');
              }}
            >
              <Ionicons name="settings-outline" size={24} color="#c0392b" />
              <Text style={styles.menuText}>Configurações</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('Home')}
            >
              <Ionicons name="log-out-outline" size={24} color="#c0392b" />
              <Text style={styles.menuText}>Sair</Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>

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

  logo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  content: {
    padding: 20,
  },

  greeting: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#333',
  },

  subtitle: {
    color: '#777',
    marginTop: 5,
    marginBottom: 20,
  },

  stepsCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 3,
  },

  cardTitle: {
    fontSize: 17,
    color: '#666',
    marginTop: 8,
  },

  steps: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
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

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  smallCard: {
    width: '48%',
    backgroundColor: '#fff',
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

  label: {
    color: '#777',
  },

  trainingButton: {
    backgroundColor: '#c0392b',
    borderRadius: 15,
    padding: 17,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  trainingText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  menuBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  menu: {
    width: '82%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 45,
    paddingHorizontal: 20,
  },

  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c0392b',
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  menuText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
});