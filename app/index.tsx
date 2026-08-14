import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";

export default function Home() {
  return (
    <View style={s.container}>
      <ImageBackground
        source={require("../assets/images/bg.png")}
        resizeMode="cover"
        style={s.image}
      >
        <Image style={s.logo} source={require("../assets/images/logo.png")} />
        <Text style={s.title}>Evil Scam Site</Text>
        <TouchableOpacity style={s.btn} onPress={() => router.push("/cards")}>
          <Text style={s.btnText}>ENTRAR</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    position: "absolute",
    top: 12,
    left: 15,
    borderRadius: 50,
    height: 90,
  },
  btn: {
    position: "absolute",
    left: 70,
    backgroundColor: "#01497C",
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 29,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 50,
  },
  title: {
    position: "absolute",
    top: 35,
    left: 150,
    color: "black",
    fontSize: 30,
  },
});
