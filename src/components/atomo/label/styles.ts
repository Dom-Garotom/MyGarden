import { color } from "@/src/styles/colors";
import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    task: {
      backgroundColor: color.green[50],
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 5,
    },
  
    pendente: {
      backgroundColor: color.utils.pendente,
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 5,
    },
    
    conclude: {
      backgroundColor: color.green[400],
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 5,
    },
  
    text: {
      color: color.utils.white,
      fontSize: 10,
      fontWeight: "600",
    },
  })