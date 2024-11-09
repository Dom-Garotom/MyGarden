import { Modal, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { color } from "@/src/styles/colors";
import ButtonSubmit from "../../atomo/buttonSubmit";
import { router } from "expo-router";import { styles } from "./style";
import React from "react";

interface PlantItemProps {
    name: string;
    species: string;
    dificult: string;
    lacalization: string;
    water: string;
    recomended: boolean,
    sun : string;
}

export default function ModalPLantItem({ name, species , dificult , lacalization , water , recomended ,  sun}: PlantItemProps) {
    const [close, setClose] = useState(true)

    return (
        <Modal transparent visible={close} animationType="slide">
            <View style={styles.modal}>
                <View style={styles.modalContent}>

                    <View style={styles.modalHeader}>
                        <View style={styles.modalInfoContainer}>
                            <Text style={styles.titulo} >{name}</Text>
                            <Text style={styles.subTitulo}>{species}</Text>
                        </View>

                        <TouchableOpacity onPress={() => setClose(!close)}>
                            <MaterialIcons name="exit-to-app" size={20} color={color.utils.black} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.modalStatusContainer}>

                        <View style={styles.statusRecomended}>
                            { recomended ? 
                                <>
                                    <MaterialIcons name="done-all" size={20} color={color.green[500]} />
                                    <Text style={styles.statusRecomend_textTrue} >Recomendados para apartamentos</Text>    
                                </>
                                :
                                <>
                                    <MaterialIcons name="warning" size={20} color={color.utils.pendente} />
                                    <Text style={styles.statusRecomend_text}>Não recomendados para apartamentos</Text>   
                                </>
                        
                        }
                        </View>

                        <View style={styles.statusContainer}>
                            <View style={styles.statusWater}>
                                <MaterialIcons name="water-drop" size={16} color={color.green[500]} />
                                <Text style={styles.statusWater_text}>{water}</Text>
                            </View>

                            <View style={styles.statusSun}>
                                <MaterialIcons name="sunny" size={16} color={color.green[500]} />
                                <Text style={styles.statusSun_text}>{sun}</Text>
                            </View>


                            <View style={styles.statusToxic}>
                                <MaterialIcons name="biotech" size={16} color={color.green[500]} />
                                <Text style={styles.statusToxic_text}>Toxic</Text>
                            </View>

                            <View style={styles.statusDificult}>
                                <MaterialIcons name="local-activity" size={16} color={color.green[500]} />
                                <Text style={styles.statusDificult_text}>{dificult}</Text>
                            </View>

                        </View>

                        <View style={styles.statusLocalization}>
                            <MaterialIcons name="location-on" size={20} color={color.green[500]} />
                            <Text style={styles.statusLocalization_text}>Encontrado na {lacalization}</Text>
                        </View>


                    </View>

                    <ButtonSubmit title="Adicionar uma task" onPress={ () => router.push("/addTask")} />
                </View>

            </View>
        </Modal>
    )
}

