import { FlatList, StyleSheet, Text, View } from "react-native";
import TaskItem from "../../molecula/taskItem";
import { plants } from "@/src/utils/plants";
import { color } from "@/src/styles/colors";

type Props ={
    categoryName: string 
}

export default function TaskCategory( {categoryName} : Props)  {
  return (
    <View style={styles.container_task}>
    <Text style={styles.container_taks_titulo}>{categoryName}</Text>

    <FlatList
      data={plants}
      keyExtractor={ item => item.id}
      renderItem={ ({item}) => ((
        <TaskItem
          plantName={item.plantName} 
          status={item.status}
          species={item.species}
        />
      ))}
      style={styles.container_list}
    />


    <Text style={styles.container_taks_text}>Complete  as task ou click para mais instuções</Text>
  </View>
  )
}


const styles = StyleSheet.create({
    container_task: {
      width: "100%",
      height: 368,
      borderRadius: 10,
      paddingHorizontal: 19,
      paddingVertical: 15,
      backgroundColor: color.utils.white,
      gap: 15,
    },
  
    container_taks_titulo: {
      fontSize: 20,
      fontWeight: "600"
    },
  
    container_taks_text: {
      width: "100%",
      textAlign: "center",
    },

    container_list: {
        paddingTop: 10,
        paddingBottom: 20
    },
})
  