import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import TaskCategory from "../../molecula/taskCategory";
import { TaskCategories } from "@/src/utils/plants";
import TaskStatus from "../../atomo/taskStatus";
import MensageLabel from "../../atomo/mensageLabel";

export default function AllTaskContainer() {
  return (
      <FlatList
        ListHeaderComponent={
          <View>
            <MensageLabel
          titulo="Bom dia"
          text="Hoje é um novo dia para cuidar das suas plantas! Vamos juntos regar, adubar e garantir um ótimo início para elas."
          />

          <TaskStatus
          variant="done"
          />
          </View>

        }

        data={TaskCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => ((
          <TaskCategory
            categoryName={item.categoryName}
            task={item.habits}
          />
        ))}
      />
  )
}

