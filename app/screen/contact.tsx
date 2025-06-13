import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const colors = {
  darkGray: '#2C2F33',
  autismBlue: '#0057B8',
  lightGray: '#AAB2BD',
  white: '#FFFFFF',
  inputBackground: '#40464F',
  separator: '#50575E',
};

const STORAGE_KEY = '@contact_numbers';

export default function Contact() {
  const [emergencyNumber, setEmergencyNumber] = useState('');
  const [doctorNumber, setDoctorNumber] = useState('');
  const [schoolNumber, setSchoolNumber] = useState('');
  const [otherNumber, setOtherNumber] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Charger les numéros au lancement
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setEmergencyNumber(parsed.emergencyNumber || '');
          setDoctorNumber(parsed.doctorNumber || '');
          setSchoolNumber(parsed.schoolNumber || '');
          setOtherNumber(parsed.otherNumber || '');
        }
      } catch (e) {
        console.error('Erreur chargement numéros', e);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  const handleSave = async () => {
    if (!emergencyNumber.trim() && !doctorNumber.trim() && !schoolNumber.trim() && !otherNumber.trim()) {
      Alert.alert('Attention', 'Veuillez renseigner au moins un numéro.');
      return;
    }
    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ emergencyNumber, doctorNumber, schoolNumber, otherNumber })
      );
      Alert.alert('Enregistré', 'Les numéros ont bien été enregistrés.');
    } catch (e) {
      Alert.alert('Erreur', "Impossible d'enregistrer les numéros.");
    }
  };

  // Fonction pour lancer un appel téléphonique
  const callNumber = (number: string) => {
    if (!number) return;
    const url = `tel:${number}`;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert('Erreur', "Impossible d'ouvrir l'application téléphone.");
      }
    });
  };

  if (!isLoaded) {
    return null; // ou un loader
  }

  // Composant d'affichage + appel rapide
  const NumberRow = ({ label, number }: { label: string; number: string }) => {
    if (!number) return null;
    return (
      <View style={styles.numberRow}>
        <Text style={styles.numberLabel}>{label}</Text>
        <View style={styles.numberAndIcon}>
          <Text style={styles.numberText}>{number}</Text>
          <TouchableOpacity onPress={() => callNumber(number)} style={styles.callButton}>
            <Ionicons name="call" size={22} color={colors.autismBlue} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Numéros importants</Text>
        <Text style={styles.subtitle}>Renseignez ici les contacts essentiels pour votre enfant</Text>

        {/* Affichage des numéros enregistrés */}
        <View style={styles.savedNumbers}>
          <NumberRow label="Urgence" number={emergencyNumber} />
          <NumberRow label="Médecin" number={doctorNumber} />
          <NumberRow label="École" number={schoolNumber} />
          <NumberRow label="Autre" number={otherNumber} />
        </View>

        <View style={styles.separator} />

        {/* Formulaire */}
        <View style={styles.group}>
          <Text style={styles.label}>Numéro d'urgence</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le numéro d'urgence"
            placeholderTextColor={colors.lightGray}
            keyboardType="phone-pad"
            value={emergencyNumber}
            onChangeText={setEmergencyNumber}
          />
        </View>

        <View style={styles.separator} />

        <View style={styles.group}>
          <Text style={styles.label}>Numéro du médecin</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le numéro du médecin"
            placeholderTextColor={colors.lightGray}
            keyboardType="phone-pad"
            value={doctorNumber}
            onChangeText={setDoctorNumber}
          />
        </View>

        <View style={styles.separator} />

        <View style={styles.group}>
          <Text style={styles.label}>Numéro de l'école</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le numéro de l'école"
            placeholderTextColor={colors.lightGray}
            keyboardType="phone-pad"
            value={schoolNumber}
            onChangeText={setSchoolNumber}
          />
        </View>

        <View style={styles.separator} />

        <View style={styles.group}>
          <Text style={styles.label}>Autre numéro important</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez un autre numéro important"
            placeholderTextColor={colors.lightGray}
            keyboardType="phone-pad"
            value={otherNumber}
            onChangeText={setOtherNumber}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSave} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Enregistrer</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.darkGray,
  },
  container: {
    padding: 24,
    paddingTop: 48,
    paddingBottom: 48,
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.autismBlue,
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.lightGray,
    marginBottom: 24,
    textAlign: 'center',
  },
  savedNumbers: {
    marginBottom: 32,
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    paddingHorizontal: 12,
  },
  numberLabel: {
    color: colors.lightGray,
    fontWeight: '600',
    fontSize: 16,
  },
  numberAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberText: {
    color: colors.white,
    fontSize: 16,
    marginRight: 12,
  },
  callButton: {
    padding: 6,
    borderRadius: 20,
    backgroundColor: '#233445',
  },
  group: {
    marginBottom: 12,
  },
  label: {
    color: colors.lightGray,
    fontWeight: '600',
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.white,
  },
  separator: {
    height: 1,
    backgroundColor: colors.separator,
    marginVertical: 16,
  },
  button: {
    backgroundColor: colors.autismBlue,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});
