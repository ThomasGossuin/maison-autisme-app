import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const colors = {
  darkGray: '#2C2F33',
  autismBlue: '#0057B8',
  lightGray: '#AAB2BD',
  white: '#FFFFFF',
};

const AdviceData = [
  {
    title: "Créer un environnement sécurisant",
    description:
      "Un cadre stable et rassurant aide votre enfant à se sentir en confiance et à mieux apprendre.",
    actions: [
      "Maintenir une routine quotidienne régulière.",
      "Limiter les changements brusques dans son environnement.",
      "Utiliser des repères visuels pour structurer sa journée.",
    ],
  },
  {
    title: "Encourager la communication",
    description:
      "Favorisez tous les moyens d’expression pour que votre enfant puisse se faire comprendre.",
    actions: [
      "Utiliser des pictogrammes ou des images pour communiquer.",
      "Encourager les interactions, même non verbales.",
      "Être patient et valoriser chaque progrès.",
    ],
  },
  {
    title: "Favoriser l'autonomie",
    description:
      "Apprendre à votre enfant à faire seul renforce sa confiance et son développement.",
    actions: [
      "Laisser votre enfant essayer avant d’intervenir.",
      "Découper les tâches en étapes simples.",
      "Féliciter ses efforts, même s’il n’y arrive pas parfaitement.",
    ],
  },
  {
    title: "Soutenir les interactions sociales",
    description:
      "Les relations avec les autres enfants sont essentielles pour son épanouissement.",
    actions: [
      "Organiser des rencontres avec des enfants de son âge.",
      "Encourager les jeux coopératifs.",
      "Modéliser les comportements sociaux positifs.",
    ],
  },
];

export default function Advice() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Conseils aux parents</Text>

      {AdviceData.map(({ title, description, actions }, index) => (
        <View key={index} style={styles.adviceItem}>
          <Text style={styles.adviceTitle}>{title}</Text>
          <Text style={styles.adviceDescription}>{description}</Text>
          <Text style={styles.actionsTitle}>À faire :</Text>
          {actions.map((action, i) => (
            <Text key={i} style={styles.action}>• {action}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
  },
  contentContainer: {
    padding: 24,
    paddingTop: 32,
    paddingBottom: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.autismBlue,
    marginBottom: 24,
    textAlign: 'center',
  },
  adviceItem: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingBottom: 16,
  },
  adviceTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 8,
  },
  adviceDescription: {
    fontSize: 16,
    color: colors.lightGray,
    marginBottom: 8,
  },
  actionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.autismBlue,
    marginBottom: 6,
  },
  action: {
    fontSize: 16,
    color: colors.white,
    marginLeft: 12,
    marginBottom: 4,
  },
});
