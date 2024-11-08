import { color } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
      width: "100%",
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 18,
      backgroundColor: color.utils.white,
      gap: 10,
      marginVertical: 10,
    },
  
    container_text: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
  
    titulo: {
      fontSize: 20,
      fontWeight: "700",
      color: color.utils.black
    },
  
    text: {
      width: 240,
      fontSize: 15,
      fontWeight: "500",
      color: color.utils.black
    },
  
    subText: {
      width: 231,
      fontSize: 15,
      fontWeight: "400",
      color: color.utils.subText
    },
  
    status_done: {
      alignItems: "center",
      justifyContent: "center",
      width: 45,
      height: 45,
      borderRadius: 100,
      backgroundColor: color.green[50]
    },
  
    status_danger: {
      alignItems: "center",
      justifyContent: "center",
      width: 45,
      height: 45,
      borderRadius: 100,
      backgroundColor: color.utils.danger
    }
  })