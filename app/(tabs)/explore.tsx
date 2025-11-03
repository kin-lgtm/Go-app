import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ExploreScreen2() {
  const destinations = [
    {
      id: 1,
      name: 'Galle Fort',
      description: 'Historic Dutch colonial fortress',
      icon: '🏰',
      distance: '115 km',
    },
    {
      id: 2,
      name: 'Sigiriya',
      description: 'Ancient rock fortress',
      icon: '🏔️',
      distance: '148 km',
    },
    {
      id: 3,
      name: 'Nuwara Eliya',
      description: 'Hill country paradise',
      icon: '🌄',
      distance: '180 km',
    },
    {
      id: 4,
      name: 'Ella',
      description: 'Scenic mountain retreat',
      icon: '🌿',
      distance: '200 km',
    },
  ];

  return (
    <ScrollView style={styles2.container}>
      <View style={styles2.header}>
        <Text style={styles2.headerTitle}>Popular Destinations</Text>
        <Text style={styles2.headerSubtitle}>Explore the beauty of Sri Lanka</Text>
      </View>

      <View style={styles2.destinationList}>
        {destinations.map((dest) => (
          <TouchableOpacity key={dest.id} style={styles2.destCard}>
            <View style={styles2.destLeft}>
              <View style={styles2.iconContainer}>
                <Text style={styles2.destIcon}>{dest.icon}</Text>
              </View>
              <View style={styles2.destInfo}>
                <Text style={styles2.destName}>{dest.name}</Text>
                <Text style={styles2.destDescription}>{dest.description}</Text>
                <Text style={styles2.destDistance}>📍 {dest.distance} away</Text>
              </View>
            </View>
            <Text style={styles2.arrow}>→</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    padding: 20,
    paddingTop: 24,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748B',
  },
  destinationList: {
    padding: 16,
  },
  destCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  destLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 56,
    height: 56,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  destIcon: {
    fontSize: 32,
  },
  destInfo: {
    flex: 1,
  },
  destName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 4,
  },
  destDescription: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 6,
  },
  destDistance: {
    fontSize: 12,
    color: '#3B82F6',
    fontWeight: '500',
  },
  arrow: {
    fontSize: 20,
    color: '#CBD5E1',
    marginLeft: 8,
  },
});