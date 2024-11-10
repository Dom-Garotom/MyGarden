import { FlatList,  View } from "react-native";
import TaskCategory from "../../molecula/taskCategory";
import TaskStatus from "../../atomo/taskStatus";
import MensageLabel from "../../atomo/mensageLabel";
import { getTask, Task } from "@/src/storage/task-storage";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";

export default function AllTaskContainer() {
  const [data , setData] = useState<Task[]>([])

  useFocusEffect(
    useCallback(() =>{
      handleAllTask();
    }, [])
  )

  const handleAllTask = async () => {
    const result = await getTask();

    if (result){
      setData(result)
    }
  }

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

        data={data.filter(item => item.habits && Array.isArray(item.habits))}
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

