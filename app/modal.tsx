import { StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ About GoMate</Text>
      <Text>GoMate helps you explore destinations and view live transport schedules.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
