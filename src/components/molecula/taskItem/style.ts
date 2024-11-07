import { color } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({  
    item: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      height: 62
    },
  
    Image_item: {
      width: 45,
      height: 45,
      borderRadius: 100,
      marginRight: 10,
    },
  
    text_container: {
      flex: 1,
    },
    text_title: {
      fontWeight: '600',
      fontSize: 14,
    },
    text_subTitle: {
      fontWeight: "400",
      fontSize: 13,
      color: color.utils.subText
    },
})
  