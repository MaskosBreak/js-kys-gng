import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from "react-native";

import { router } from "expo-router";

export default function Cards() {
  return (
    <View>
            <TouchableOpacity onPress={() => router.push('/')}>
                <Text> Sair</Text>
            </TouchableOpacity>

            <View style={s.nav}>
                <Image source={require('../assets/icons/left.png')}/>
                <Image source={require('../assets/icons/right.png')}/>
            </View>





    </View>



  );
}

const s = StyleSheet.create({
    nav:{
        position:'fixed',
        bottom: 0,
        backgroundColor: '#89C2D9',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection:'row',
        padding:20

    }

})