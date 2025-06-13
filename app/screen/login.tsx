import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const colors = {
  background: '#1e1f25',
  inputBackground: '#2A2D34',
  textPrimary: '#FFFFFF',
  textSecondary: '#8C94A3',
  accent: '#005BBB', // Bleu autisme
  separator: '#3A3F4B',
  google: '#DB4437',
  apple: '#000000',
  facebook: '#3b5998',
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    // login logic
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={{ marginTop: 20, marginBottom: 50, alignItems: 'center' }}>
        <Text style={styles.title}>Connexion</Text>
        <Text style={[styles.subtitle, { marginTop: 6 }]}>
          Bienvenue dans un espace pensé pour l'écoute, la clarté et l'accompagnement.
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Votre adresse email"
          placeholderTextColor={colors.textSecondary}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor={colors.textSecondary}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgot}>Mot de passe oublié ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginButtonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 40 }} />

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>ou via</Text>
        <View style={styles.separatorLine} />
      </View>

      <View style={{ height: 20 }} />

      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: colors.google }]}>
          <FontAwesome name="google" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: colors.apple }]}>
          <FontAwesome name="apple" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: colors.facebook }]}>
          <FontAwesome name="facebook" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    paddingHorizontal: 38,
    paddingTop: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    color: colors.textSecondary,
    marginBottom: 6,
    fontSize: 14,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: 20,
  },
  forgot: {
    color: colors.accent, // bleu autisme ici
    textAlign: 'right',
    marginBottom: 28,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: colors.accent, // bleu autisme ici
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 6,
  },
  loginButtonText: {
    color: colors.textPrimary,
    fontWeight: '600',
    fontSize: 18,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.separator,
  },
  separatorText: {
    color: colors.textSecondary,
    marginHorizontal: 12,
    fontSize: 13,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
