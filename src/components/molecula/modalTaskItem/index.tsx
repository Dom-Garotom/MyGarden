import { Modal, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { color } from "@/src/styles/colors";
import Option from "../../atomo/option";
import Label from "../../atomo/label";
import { styles } from "./style";
import { getTask, key_task_storage, saveToStorage, Task } from "@/src/storage/task-storage";

type Props = {
    id: string
    category: string
    name: string
    specie: string
    status: string
}


export default function ModalTaskItem({ category, name, specie, id  , status = "pendente"}: Props) {
    const [close, setClose] = useState(true)

    const concludeTask = async () =>{
        const Tasks : Task[] = await getTask();
        const CategoryIndex = Tasks.findIndex( item => item.categoryName === category)
        
        if (CategoryIndex == -1){
            return
        }
        
        const habitsIndex = Tasks[CategoryIndex].habits.findIndex(item => item.plantName === name);
        
        if (habitsIndex == -1){
            return
        }
        
        Tasks[CategoryIndex].habits[habitsIndex].status = "conclude"

        saveToStorage(key_task_storage , Tasks )

        setClose(false)
    }

    const removeTask = async () =>{
        const Tasks : Task[] = await getTask();
        const remove =  Tasks.map( item => {
            if ( item.categoryName === category ){
                const itensAptos = item.habits.filter( habit => habit.plantName !== name && habit.species !== specie);

                return {
                    ...item,
                    habits: itensAptos,
                };
            }

            return item;
        }).filter(item => item.habits.length > 0);

        saveToStorage(key_task_storage , remove )

        setClose(false)
    }


    return (
        <Modal transparent visible={close} animationType="slide">
            <View style={styles.modal}>
                <View style={styles.modalContent}>

                    <View style={styles.modalHeader}>

                        <Text style={styles.modalCategory}>{category}</Text>

                        <TouchableOpacity onPress={() => setClose(false)}>
                            <MaterialIcons name="exit-to-app" size={20} color={color.utils.black} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.modalInfo}>

                        <View style={styles.modalInfoContainer}>
                            <Text style={styles.titulo} >{name}</Text>
                            <Text style={styles.subTitulo}>{specie}</Text>
                        </View>

                        <Label text={status} variant={status}/>

                    </View>

                    <View style={styles.optionContainer}>
                        <Option name="Excluir" icon="delete-sweep" variant="secundary"  onPress={() => removeTask()} />
                        <Option name="Concluir" icon="done-all" onPress={() => removeTask()} />
                    </View>
                </View>

            </View>
        </Modal>
    )
}
