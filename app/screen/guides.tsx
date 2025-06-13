import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const colors = {
  darkGray: '#2C2F33',
  autismBlue: '#0057B8',
  lightGray: '#AAB2BD',
  white: '#FFFFFF',
};

const guidesData = [
  {
    title: "Comprendre les troubles sensoriels",
    description:
      "Votre enfant peut être hypersensible ou hyposensible à certains stimuli. Découvrez les signes et comment adapter son environnement.",
    solutions: [
      "Créer un espace calme à la maison.",
      "Utiliser des outils sensoriels adaptés (balles, écouteurs).",
      "Informer les proches des particularités de votre enfant.",
    ],
  },
  {
    title: "Gérer les crises et angoisses",
    description:
      "Apprenez à reconnaître les déclencheurs et à intervenir pour apaiser votre enfant rapidement.",
    solutions: [
      "Utiliser des techniques de respiration et de relaxation.",
      "Prévoir des objets rassurants.",
      "Mettre en place une routine stable.",
    ],
  },
  {
    title: "Favoriser l’intégration scolaire",
    description:
      "Découvrez comment collaborer avec l’école pour un accompagnement adapté et efficace.",
    solutions: [
      "Rencontrer les enseignants régulièrement.",
      "Demander des aménagements pédagogiques.",
      "Soutenir les interactions sociales de l’enfant à l’école.",
    ],
  },
];

function IllustrationPlaceholder() {
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>Illustration ici</Text>
    </View>
  );
}

export default function Guides() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Guides d’aide pour parents</Text>

      {guidesData.map(({ title, description, solutions }, index) => (
        <View key={index} style={styles.guideItem}>
          {/* Illustration pour chaque section */}
          <IllustrationPlaceholder />
          
          <Text style={styles.guideTitle}>{title}</Text>
          <Text style={styles.guideDescription}>{description}</Text>
          <Text style={styles.solutionsTitle}>Solutions proposées :</Text>
          {solutions.map((solution, i) => (
            <Text key={i} style={styles.solution}>• {solution}</Text>
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
  placeholder: {
    height: 120,
    borderWidth: 2,
    borderColor: colors.autismBlue,
    borderStyle: 'dashed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  placeholderText: {
    color: colors.autismBlue,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.autismBlue,
    marginBottom: 24,
    textAlign: 'center',
  },
  guideItem: {
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingBottom: 16,
  },
  guideTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 8,
  },
  guideDescription: {
    fontSize: 16,
    color: colors.lightGray,
    marginBottom: 8,
  },
  solutionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.autismBlue,
    marginBottom: 6,
  },
  solution: {
    fontSize: 16,
    color: colors.white,
    marginLeft: 12,
    marginBottom: 4,
  },
});
