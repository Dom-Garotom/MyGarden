import AsyncStorage from "@react-native-async-storage/async-storage"
import { createPlant } from "../utils/plantsInfo";

const key_plant_storage = "plant";

export async function getPlant() {
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

        const newPlant = createPlant(namePlant, species);
        newPlant ? response.push(newPlant) : response;

        await AsyncStorage.setItem(key_plant_storage, JSON.stringify(response))
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}