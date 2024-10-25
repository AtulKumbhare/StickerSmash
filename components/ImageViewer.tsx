import { Image } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  width?: number;
  height?: number;
  imageScr: string;
  selectedImage: string | undefined;
};

const ImageViewer = ({ imageScr, selectedImage, width = 320, height = 440 }: Props) => {
  const imgSource = selectedImage ? { uri: selectedImage } : imageScr;
  return (
    <Image source={imgSource} style={{ width, height, borderRadius: 18 }} />
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
