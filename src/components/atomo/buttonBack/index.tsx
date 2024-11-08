import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function ButtonBack() {
    return (
        <TouchableOpacity style={styles.buttonBack} onPress={() => router.back()}>
            <MaterialIcons name='arrow-back' size={30} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBack:{
        position:'absolute',
        left: 20,
        top: 24
    },
})