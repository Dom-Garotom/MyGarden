import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  variant: "done" | "danger"
}

export default function TaskStatus({ variant }: Props) {
  return (
    <View style={styles.Container}>

      <Text style={styles.titulo}>Atividades de hoje</Text>

      <View style={styles.container_text}>

        <View style={variant === "danger" ? styles.status_danger : styles.status_done}>

          <MaterialIcons
            name={variant === "danger" ? "remove" : "done"}
            size={25}
            color={"white"}
          />

        </View>

        <View>
          <Text style={styles.text}>
            {variant === "danger" ?
              ("Nem todas as tasks foram feitas")
              :
              ("Todas as tarefas foram concluidas")
            }
          </Text>

          <Text style={styles.subText}>
            {variant === "danger" ?
              ("Aproveite para termina-las")
              :
              ("Novas tarefas virão amanhã")
            }
          </Text>
        </View>

      </View>

    </View>
  )
}