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
        alignItems: "center",
    },

    modalInfoContainer: {
        flex: 1
    },

    titulo: {
        color: color.green[500],
        fontWeight: "500",
        fontSize: 20,
    },

    subTitulo: {
        color: color.gray[400],
    },


    modalContent: {
        height: "100%",
        flex: 1,
        maxHeight: 300,
        backgroundColor: color.utils.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 22,
        gap: 20,
    },


    modalStatusContainer: {
        flexDirection: "row",
    },

    statusContainer:{
        flexWrap: "wrap",
        flexDirection:"row",
        width:120,
        padding: 2,
    },

    statusRecomended: {
        width: 105,
        height: 95,
        borderRadius: 10,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.green.bg
    },
    statusRecomend_text: {
        fontSize: 11,
        textAlign: "center",
        fontWeight: "600",
        color: color.utils.pendente
    },
    statusRecomend_textTrue:{
        fontSize: 11,
        textAlign: "center",
        fontWeight: "600",
        color: color.green[500],
    },

    statusWater: {
        width: 58,
        height: 45,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.green.bg
    },
    statusWater_text: {
        fontSize: 10,
        textAlign: "center",
        fontWeight: "600",
        color: color.green[500]
    },


    statusSun: {
        width: 58,
        height: 45,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.green.bg
    },
    statusSun_text: {
        fontSize: 10,
        textAlign: "center",
        fontWeight: "600",
        color: color.green[500]
    },



    statusToxic: {
        width: 58,
        height: 45,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.green.bg,
        marginTop: 2,
    },
    statusToxic_text: {
        fontSize: 12,
        textAlign: "center",
        fontWeight: "600",
        color: color.green[500]
    },



    statusDificult: {
        width: 58,
        height: 45,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.green.bg,
        marginTop: 2,
    },
    statusDificult_text: {
        fontSize: 12,
        textAlign: "center",
        fontWeight: "600",
        color: color.green[500]
    },


    statusLocalization: {
        width: 105,
        height: 95,
        borderRadius: 10,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.green.bg
    },
    statusLocalization_text: {
        fontSize: 11,
        textAlign: "center",
        fontWeight: "600",
        color: color.green[500]
    },

})