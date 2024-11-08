import { color } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container_task: {
      width: "100%",
      borderRadius: 10,
      paddingHorizontal: 19,
      paddingVertical: 15,
      backgroundColor: color.utils.white,
      gap: 15,
      marginVertical: 5,
    },
  
    container_header:{
      flexDirection: "row",
      paddingRight: 15,
      justifyContent: "center",
      alignItems:  "center"
    },
  
    container_task_titulo: {
      flex: 1,
      fontSize: 20,
      fontWeight: "600",
    },
    container_task_number:{
      fontSize: 13,
      fontWeight: "600",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 100,
      backgroundColor: color.green[200],
      color: color.utils.white
    },
  
    container_taks_text: {
      width: "100%",
      textAlign: "center",
    },
  
    container_list: {
      paddingTop: 10,
      paddingBottom: 20,
      maxHeight: 250,
      overflow: "hidden"
    },
  })
  