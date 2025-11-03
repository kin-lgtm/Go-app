import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ScheduleScreen() {
  const schedules = [
    {
      id: 1,
      type: 'Bus',
      icon: '🚌',
      number: '101',
      route: 'Colombo → Kandy',
      frequency: 'Every 30 min',
      color: '#3B82F6',
      bgColor: '#EFF6FF',
    },
    {
      id: 2,
      type: 'Train',
      icon: '🚆',
      number: 'Southern',
      route: 'Scenic coastal route',
      frequency: 'Every hour',
      color: '#8B5CF6',
      bgColor: '#F3E8FF',
    },
    {
      id: 3,
      type: 'Bus',
      icon: '🚍',
      number: '138',
      route: 'Negombo → Colombo',
      frequency: 'Every 20 min',
      color: '#10B981',
      bgColor: '#ECFDF5',
    },
  ];

  return (
    <ScrollView style={schedulesStyles1.container}>
      <View style={schedulesStyles1.header}>
        <Text style={schedulesStyles1.headerTitle}>🕒 Transport Schedules</Text>
        <Text style={schedulesStyles1.headerSubtitle}>Real-time updates</Text>
      </View>

      {schedules.map((schedule) => (
        <View
          key={schedule.id}
          style={[
            schedulesStyles1.scheduleCard,
            { borderLeftColor: schedule.color },
          ]}
        >
          <View style={schedulesStyles1.scheduleHeader}>
            <View style={schedulesStyles1.scheduleLeft}>
              <View
                style={[
                  schedulesStyles1.iconContainer,
                  { backgroundColor: schedule.bgColor },
                ]}
              >
                <Text style={schedulesStyles1.scheduleIcon}>{schedule.icon}</Text>
              </View>
              <View style={schedulesStyles1.scheduleInfo}>
                <Text style={schedulesStyles1.scheduleType}>
                  {schedule.type} {schedule.number}
                </Text>
                <Text style={schedulesStyles1.scheduleRoute}>
                  {schedule.route}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              schedulesStyles1.frequencyBadge,
              { backgroundColor: schedule.bgColor },
            ]}
          >
            <Text
              style={[
                schedulesStyles1.frequencyText,
                { color: schedule.color },
              ]}
            >
              {schedule.frequency}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const schedulesStyles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    padding: 20,
    paddingTop: 24,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748B',
  },
  scheduleCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 20,
    borderRadius: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  scheduleHeader: {
    marginBottom: 12,
  },
  scheduleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  scheduleIcon: {
    fontSize: 24,
  },
  scheduleInfo: {
    flex: 1,
  },
  scheduleType: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  scheduleRoute: {
    fontSize: 14,
    color: '#64748B',
  },
  frequencyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  frequencyText: {
    fontSize: 13,
    fontWeight: '600',
  },
});