import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("@/assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Sticker Smash</Text>
      <Text style={styles.description}>
        Sticker Smash lets you add fun emojis to your favorite images! Select
        any image from your gallery, choose an emoji, and place it wherever you
        like. Customize your photos, make them fun, and share with friends!
      </Text>

      <Text style={styles.subtitle}>How to Use:</Text>
      <Text style={styles.instructions}>
        1. Tap "Select Image" to choose an image from your gallery.{"\n"}
        2. Pick an emoji you’d like to add to your image.{"\n"}
        3. Move and resize the emoji to fit your style.{"\n"}
        4. Save and share your creation!
      </Text>

      <View style={styles.socialContainer}>
        <Text style={styles.subtitle}>Connect with Us</Text>
        <View style={styles.iconRow}>
          <Ionicons
            name="logo-instagram"
            size={32}
            color="black"
            style={styles.icon}
            onPress={() => Linking.openURL("https://instagram.com/yourpage")}
          />
          <Ionicons
            name="logo-twitter"
            size={32}
            color="black"
            style={styles.icon}
            onPress={() => Linking.openURL("https://twitter.com/yourpage")}
          />
          <Ionicons
            name="mail"
            size={32}
            color="black"
            style={styles.icon}
            onPress={() => Linking.openURL("mailto:support@stickersmash.com")}
          />
        </View>
      </View>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => alert("Thanks for using Sticker Smash!")}
      >
        Rate Us
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#25292e", // Dark background
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f5f5f5", // Light text color
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#d3d3d3", // Softer light color for readability
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#f5f5f5", // Light text color
    marginTop: 20,
  },
  instructions: {
    fontSize: 14,
    color: "#d3d3d3", // Softer light color
    textAlign: "left",
    paddingHorizontal: 10,
    lineHeight: 22,
  },
  socialContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10,
    color: "#f5f5f5", // Light text color
  },
  button: {
    marginTop: 30,
    backgroundColor: "#6c63ff",
    paddingHorizontal: 20,
  },
});

export default AboutScreen;
