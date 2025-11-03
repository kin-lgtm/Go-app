import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles1.container}>
      <LinearGradient
        colors={['#3B82F6', '#8B5CF6', '#EC4899']}
        style={styles1.heroCard}
      >
        <Text style={styles1.emoji}>🚍</Text>
        <Text style={styles1.heroTitle}>Welcome to GoMate!</Text>
        <Text style={styles1.heroSubtitle}>
          Your smart travel assistant for public transport and destinations
        </Text>
      </LinearGradient>

      <View style={styles1.quickActions}>
        <TouchableOpacity style={styles1.actionCard}>
          <Text style={styles1.actionIcon}>🕒</Text>
          <Text style={styles1.actionTitle}>Schedules</Text>
          <Text style={styles1.actionSubtitle}>View timings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles1.actionCard}>
          <Text style={styles1.actionIcon}>🧭</Text>
          <Text style={styles1.actionTitle}>Explore</Text>
          <Text style={styles1.actionSubtitle}>Destinations</Text>
        </TouchableOpacity>
      </View>

      <View style={styles1.featuredSection}>
        <Text style={styles1.sectionTitle}>Popular Routes</Text>
        <View style={styles1.routeCard}>
          <View style={styles1.routeBadge}>
            <Text style={styles1.routeBadgeText}>TRENDING</Text>
          </View>
          <Text style={styles1.routeTitle}>Colombo → Galle</Text>
          <Text style={styles1.routeSubtitle}>Express bus service</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  heroCard: {
    margin: 20,
    padding: 32,
    borderRadius: 24,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  emoji: {
    fontSize: 56,
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#E0E7FF',
    lineHeight: 24,
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 24,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 13,
    color: '#64748B',
  },
  featuredSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 12,
  },
  routeCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  routeBadge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  routeBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#3B82F6',
  },
  routeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  routeSubtitle: {
    fontSize: 14,
    color: '#64748B',
  },
});