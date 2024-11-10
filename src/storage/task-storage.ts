import { Plant } from './../utils/plantsInfo';
import AsyncStorage from "@react-native-async-storage/async-storage"
import UUID from "react-native-uuid";
import { getPlant } from './plant-storage';

export type Task = {
    id: string
    categoryName: string
    habits: {
        id: string,
        plantName: string
        species: string
        status: string
        time: string
        data: string
    }[]
}


export const key_task_storage = "task";

export async function saveToStorage(key: string, value: any): Promise<void> {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        throw new Error("Erro ao salvar os dados no AsyncStorage" + error);
    }
}

export async function getTask() {
    try {
        const data = await AsyncStorage.getItem(key_task_storage);
        const response = data ? JSON.parse(data) : [];
        return response;
    } catch (error) {
        throw error;
    }
}



export async function addTask(namePlant: string, data: string, time: string, category: string) {
    try {
        const DATA = await AsyncStorage.getItem(key_task_storage);
        let response = DATA ? JSON.parse(DATA) : [];


        const DATA_PLANT = await getPlant();
        const plant = DATA_PLANT.find((item: Plant) => item.name === namePlant);

        if (!plant) {
            return false;
        }

        const newTask = {
            id: UUID.v4() as string,
            plantName: namePlant,
            species: plant.species,
            status: "pendente",
            time: time,
            data: data,
        }

        const categoryExist: Task = response.find((item: any) => item.categoryName === category);

        if (categoryExist) {
            categoryExist.habits = categoryExist.habits || [];
            categoryExist.habits.push(newTask)
        } else {
            response.push({
                id: UUID.v4() as string,
                categoryName: category,
                habits:[newTask]
            })
        }

        await saveToStorage(key_task_storage, response)

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }

}
