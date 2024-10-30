import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text, StyleSheet, View, Platform } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        tabBarInactiveTintColor: "#f5f5f5",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          height: Platform.OS === "web" ? 60 : 80,
          paddingBottom: Platform.OS === "web" ? 0 : 25,
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: ({ focused, color }) => (
            <View style={styles.container}>
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={24}
                style={{ marginRight: 5 }}
              />
              <Text
                style={{
                  color: focused ? "#ffd33d" : "#f5f5f5",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Home
              </Text>
            </View>
          ),
          tabBarIcon: () => <></>,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <View style={styles.container}>
              <Ionicons
                name={
                  focused
                    ? "information-circle-sharp"
                    : "information-circle-outline"
                }
                color={color}
                size={24}
                style={{ marginRight: 5 }}
              />
              <Text
                style={{
                  color: focused ? "#ffd33d" : "#f5f5f5",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                About
              </Text>
            </View>
          ),
          tabBarIcon: () => <></>,
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
