import { Image } from "expo-image";
import { Dimensions, StyleSheet } from "react-native";

// const { width: screenWidth } = Dimensions.get("window");

type Props = {
  imageScr: string;
  selectedImage: string | undefined;
};

const ImageViewer = ({ imageScr, selectedImage }: Props) => {
  const imgSource = selectedImage ? { uri: selectedImage } : imageScr;
  return (
    <Image source={imgSource} style={styles.image} />
  );
};
export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
