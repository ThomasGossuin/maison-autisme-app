import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Advice from './screen/conseils';
import Contact from './screen/contact';
import FAQ from './screen/faq';
import Guides from './screen/guides';
import Login from './screen/login';

const Tab = createBottomTabNavigator();

const colors = {
  background: '#1e1f25',
  autismBlue: '#005BBB',
  lightGray: '#8C94A3',
  textPrimary: '#FFFFFF',
};

export default function Layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: colors.autismBlue,
            tabBarInactiveTintColor: colors.lightGray,
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarItemStyle: styles.tabBarItem,
            tabBarPressColor: 'transparent',
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: React.ComponentProps<typeof Ionicons>['name'];

              switch (route.name) {
                case 'contact':
                  iconName = focused ? 'call' : 'call-outline';
                  break;
                case 'faq':
                  iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
                  break;
                case 'guides':
                  iconName = focused ? 'library' : 'library-outline';
                  break;
                case 'advice':
                  iconName = focused ? 'bulb' : 'bulb-outline';
                  break;
                case 'login':
                  iconName = focused ? 'person-circle' : 'person-circle-outline';
                  break;
                default:
                  iconName = 'ellipse';
              }

              const iconSize = focused ? 28 : 24;

              return <Ionicons name={iconName} size={iconSize} color={color} />;
            },
          })}
        >
          <Tab.Screen name="contact" component={Contact} options={{ title: 'Contact' }} />
          <Tab.Screen name="faq" component={FAQ} options={{ title: 'FAQ' }} />
          <Tab.Screen name="guides" component={Guides} options={{ title: 'Guides' }} />
          <Tab.Screen name="advice" component={Advice} options={{ title: 'Conseils' }} />
          <Tab.Screen name="login" component={Login} options={{ title: 'Compte' }} />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabBar: {
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: '#444',
    height: 80,
    paddingBottom: 24,
    paddingTop: 12,
  },
  tabBarLabel: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.textPrimary,
  },
  tabBarItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
