import { useState, useRef } from "react";
import { View, StyleSheet, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import EmojiModal from "react-native-emoji-modal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import domtoimage from "dom-to-image";
import { StatusBar } from "expo-status-bar";
import ToastManager, { Toast } from "toastify-react-native";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CIrcleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";

const PlaceholderImage = require("@/assets/images/placeholder-image.png");
const PlaceholderImage1 = require("@/assets/images/placeholder-image1.jpg");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | null>(null);
  const imageRef = useRef(null);

  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [visible, setVisible] = useState(false);

  if (status === null) {
    requestPermission();
  }

  const pickImageAsync = async () => {
    Toast.error("You did not select any image.");
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      Toast.error("You did not select any image.");
      // alert("You did not select any image.");
      setVisible(true);
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    try {
      if (Platform.OS === "web") {
        const localUri = await domtoimage.toJpeg(imageRef.current, {
          quality: 1,
          width: 320,
          height: 440,
        });

        const link = document.createElement("a");
        link.download = "sticker-smash.jpeg";
        link.href = localUri;
        link.click();
        Toast.success("Saved!");
      } else {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          // alert("Saved!");
          Toast.success("Image saved to library!");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <View ref={imageRef} collapsable={false} style={styles.imageContainer}>
          <ImageViewer
            imageScr={PlaceholderImage}
            // imageScr={PlaceholderImage1}
            selectedImage={selectedImage}
            // width={Platform.OS === "web" ? 680 : undefined}
            // height={Platform.OS === "web" ? 560 : undefined}
          />
          {pickedEmoji && (
            <EmojiSticker imageSize={40} stickerSrc={pickedEmoji} />
          )}
        </View>

        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton label="Reset" icon="refresh" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton
                label="Save"
                icon="save-alt"
                onPress={onSaveImageAsync}
              />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button
              label="Choose a photo"
              theme="primary"
              onPress={pickImageAsync}
            />
            <Button
              label="Use this photo"
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiModal
            columns={Platform.OS === "web" ? 41 : 7}
            onEmojiSelected={(emoji) => {
              setPickedEmoji(emoji);
              onModalClose();
            }}
            modalStyle={styles.modalStyle}
            containerStyle={styles.containerStyle}
            scrollStyle={styles.scrollStyle}
            headerStyle={styles.headerStyle}
            searchStyle={styles.searchStyle}
            backgroundStyle={styles.modalContainer}
          />
        </EmojiPicker>
      </GestureHandlerRootView>
      <StatusBar style="light" />
      <ToastManager  duration={5000} height={68}  position="top" positionValue={-50} textStyle={{fontSize: 15}}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    textDecorationLine: "underline",
    marginTop: 15,
    color: "#0a7ea4",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  modalContainer: {
    backgroundColor: "#25292e",
    height: "100%",
    width: "100%",
    padding: 10,
  },
  modalStyle: {
    width: "100%",
    height: "100%",
  },
  containerStyle: {
    width: "95%",
    height: "100%",
    backgroundColor: "#25292e",
  },
  scrollStyle: {
    overflow: "visible",
  },
  headerStyle: {
    color: "#fff",
  },
  searchStyle: {
    backgroundColor: "#25292e",
    color: "#fff",
    borderColor: "#fff",
    paddingTop: 10,
  },
});
