import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
};

const IconButton = ({ label, icon, onPress }: Props) => {
  return (
    <Pressable
      style={styles.iconButton}
      onPress={onPress}
      android_ripple={{ color: "#fff" }}
    >
      <View>
        <MaterialIcons name={icon} size={24} color="#fff" />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </View>
    </Pressable>
  );
};
export default IconButton;

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
