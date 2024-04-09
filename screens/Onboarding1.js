import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/EvilIcons";
function Onboarding1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={ styles.iconPosition}
          source={require("../assets/boarding1.jpg")}
        />
      </View>
      <View style={{marginBottom:30}}>
      <Text style={styles.title}>Quản lí mọi thứ</Text>
      <Text style={styles.title}> ở một nơi</Text>
      </View>
      
      <Text style={styles.content}>Theo dõi chi tiêu</Text>
      <Text style={styles.content}> và phân loại theo nhu cầu</Text>

      <View style={styles.arrowButton}>
        <Pressable onPress={() => navigation.navigate("Onboarding2")}>
          <Ionicons
            style={styles.arrow}
            name="arrow-right"
            size={80}
            color="#120068"
          ></Ionicons>
        </Pressable>
      </View>
    </View>
  );
}
Onboarding1.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <Pressable onPress={() => navigation.navigate("Home")} style={styles.skipButton}>
      <Text style={styles.skipText}>Skip</Text>
    </Pressable>
  ),
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", 
    textAlign: "center",
  },

 
  iconPosition: {
   top:'30%',
   width:"50%",
   height:"50%",
   alignSelf: "center",
   justifyContent: "center",
   alignItems: "center",
  },
  arrowButton: {
    bottom:'-15%',
    color: "#120068",
    alignSelf: "center",
    justifyContent: "center",
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

export default Onboarding1;
