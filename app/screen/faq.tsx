import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const colors = {
  darkGray: '#2C2F33',
  autismBlue: '#0057B8',
  lightGray: '#AAB2BD',
  white: '#FFFFFF',
};

const FAQData = [
  {
    question: "Quels sont les signes précoces de l'autisme ?",
    answer: "Les signes précoces incluent un retard dans le langage, peu de contact visuel, des comportements répétitifs, et une difficulté à interagir socialement.",
  },
  {
    question: "Comment accompagner au mieux mon enfant autiste ?",
    answer: "Il est important de créer un environnement structuré, utiliser des supports visuels, et collaborer avec des professionnels spécialisés.",
  },
  {
    question: "Quelles ressources existent pour les familles ?",
    answer: "Il existe des associations, des guides administratifs, et des groupes de soutien pour échanger entre parents.",
  },
];

export default function FAQ() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Foire Aux Questions</Text>

      {FAQData.map(({ question, answer }, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.question}>{question}</Text>
          <Text style={styles.answer}>{answer}</Text>
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
  faqItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingBottom: 12,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 8,
  },
  answer: {
    fontSize: 16,
    color: colors.lightGray,
    lineHeight: 22,
  },
});
