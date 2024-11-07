import { color } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    modal: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },

    modalHeader: {
        flexDirection: "row",
    },

    modalContent: {
        height: "100%",
        flex: 1,
        maxHeight: 200,
        backgroundColor: color.utils.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 22,
        gap: 20,
    },


    modalCategory: {
        flex: 1,
        fontSize: 18,
        fontWeight: "600",
        color: color.utils.black
    },

    titulo:{
        color: color.green[500],
        fontWeight: "500",
    },

    subTitulo:{
        color: color.gray[400],
    },

    
    
    modalInfoContainer: {
        flex: 1
    },

    modalInfo: {
        flexDirection: "row",
        alignItems: "center",
    },


    optionContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: 1,
        borderColor: color.utils.subText,
        paddingVertical: 15,
    },

})