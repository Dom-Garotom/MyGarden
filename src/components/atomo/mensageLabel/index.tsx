import { color } from "@/src/styles/colors";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  titulo?: string
  text: string
}


export default function MensageLabel({ text, titulo }: Props) {
  return (
    <View style={styles.Container}>
      {titulo &&
        <Text style={styles.titulo}>{titulo}</Text>
      }
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    alignSelf: "flex-start",
    backgroundColor: color.utils.white,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "700",
    color: color.green[50]
  },

  text:{
    fontWeight: "500",
    color: color.gray[600]
  },

})

