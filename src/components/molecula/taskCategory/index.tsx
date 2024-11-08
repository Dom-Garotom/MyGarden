import { FlatList, Text, View } from "react-native";
import TaskItem from "../taskItem";
import { styles } from "./styles";

type Props = {
  categoryName: string,
  task: {
    id: string;
    plantName: string;
    species: string;
    status: string
  }[]
}

export default function TaskCategory({ categoryName, task }: Props) {
  
  return (
    <View style={styles.container_task}>
      <View style={styles.container_header}>
        <Text style={styles.container_task_titulo}>{categoryName}</Text>
        <Text style={styles.container_task_number}>{task.length}</Text>
      </View>

      <FlatList
        data={task}
        keyExtractor={item => item.id}
        renderItem={({ item }) => ((
          <TaskItem
            plantName={item.plantName}
            status={item.status}
            species={item.species}
            category={categoryName}
          />
        ))}
        style={styles.container_list}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
      />

      <Text style={styles.container_taks_text}>Complete  as task ou click para mais instuções</Text>
    </View>
  )
}