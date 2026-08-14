import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from "react-native";

import { router } from "expo-router";

export default function Cards() {
  return (
    <View>
            <TouchableOpacity onPress={() => router.push('/')}>
                <Text> Sair</Text>
            </TouchableOpacity>

            <View style={s.nav}>
                <TouchableOpacity onPress={() => router.push('/unity')}>
                    <Image source={require('../assets/icons/left.png') }/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/scam')}>
                    <Image source={require('../assets/icons/right.png')}/>
                </TouchableOpacity>
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