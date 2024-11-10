import AsyncStorage from "@react-native-async-storage/async-storage"
import { createPlant, Plant } from "../utils/plantsInfo";
import { saveToStorage } from "./task-storage";

const key_plant_storage = "plant";

export async function getPlant(): Promise<[Plant]> {
    try {
        const data = await AsyncStorage.getItem(key_plant_storage);
        const response = data ? JSON.parse(data) : [];
        return response;
    } catch (error) {
        throw error;
    }
}

export async function addPlant(namePlant: string, species: string) {
    try {
        const data = await AsyncStorage.getItem(key_plant_storage);
        let response = data ? JSON.parse(data) : [];

        const newPlant = await createPlant(namePlant, species);
        newPlant ? response.push(newPlant) : response;

        await saveToStorage(key_plant_storage, response)
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}