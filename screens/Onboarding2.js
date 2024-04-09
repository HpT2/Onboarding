import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/EvilIcons";
function Onboarding2({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={ styles.iconPosition}
          source={require("../assets/boarding2.jpg")}
        />
      </View>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.title}>Chia sẻ thu chi</Text>
        <Text style={styles.title}> với bạn bè</Text>
      </View>

      <Text style={styles.content}>Tham khảo và chia sẻ</Text>
      <Text style={styles.content}> kế hoạch thu chi với </Text>
      <Text style={styles.content}> những người dùng khác </Text>

      <View style={styles.arrowButton}>
        <View style={styles.arrowContainer}>
          <Pressable onPress={() => navigation.navigate("Onboarding1")}>
            <Ionicons
              style={styles.arrow}
              name="arrow-left"
              size={80}
              color="#120068"
            />
          </Pressable>
        </View>
        <View style={styles.arrowContainer}>
          <Pressable onPress={() => navigation.navigate("Onboarding3")}>
            <Ionicons
              style={styles.arrow}
              name="arrow-right"
              size={80}
              color="#120068"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    textAlign: "center",
  },
  imageContainer: {
    marginBottom: 30, 
  },
  iconPosition: {
    top:"30%",
    width:"70%",
    height:"50%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowButton: {
    width:"80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: "10%",
    
  },
  arrowContainer: {
    alignItems: "center",
  },
  arrow: {},
  title: {
    fontSize: 36,
    textAlign: "center",
    color: "#120068",
    fontWeight: "bold",
  },
  content: {
    fontSize: 24,
    textAlign: "center",
    color: "#000000",
  },
});

export default Onboarding2;
