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
      <Text>{text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    backgroundColor: color.utils.white,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 15,
    marginVertical: 10
  },

  titulo: {
    fontSize: 20,
    fontWeight: "600",
    color: color.green[50]
  }
})

