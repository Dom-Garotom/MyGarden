import { FlatList, Text, View } from "react-native";
import TaskItem from "../taskItem";
import { styles } from "./styles";
import { getTask, Task } from "@/src/storage/task-storage";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "expo-router";

type Props = {
  categoryName: string,
  task: {
    id: string;
    plantName: string;
    species: string;
    status: string 
    time: string
    data: string
  }[]
}

export default function TaskCategory({ categoryName, task }: Props) {
  const [numbTask , setTask] = useState(0);

  useFocusEffect(
    useCallback(()=>{
      numberTaskPendentes()
    },[])
  )

  
  const numberTaskPendentes = async () => {
    const tasks : Task[] = await getTask();

    if (!tasks){
      return
    }

    const numberTask = tasks.filter( item => item.categoryName === categoryName).flatMap( item => item.habits ).filter( item => item.status === 'pendente')

    if (numberTask){
      setTask(numberTask.length)
    }

  }

  return (
    <View style={styles.container_task}>
      <View style={styles.container_header}>
        <Text style={styles.container_task_titulo}>{categoryName}</Text>
        <Text style={styles.container_task_number}>{numbTask}</Text>
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