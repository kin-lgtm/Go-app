import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚍 Welcome to GoMate!</Text>
      <Text>Your smart travel assistant for public transport and destinations.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
});
