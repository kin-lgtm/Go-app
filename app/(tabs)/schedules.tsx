import { StyleSheet, Text, View } from 'react-native';

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🕒 Public Transport Schedules</Text>
      <Text>Bus 101 - Colombo → Kandy (Every 30 mins)</Text>
      <Text>Train - Southern Line (Every hour)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 10, fontWeight: 'bold' },
});
