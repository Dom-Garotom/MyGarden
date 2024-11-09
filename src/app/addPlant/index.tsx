import ButtonBack from '@/src/components/atomo/buttonBack'
import ButtonSubmit from '@/src/components/atomo/buttonSubmit'
import InpuOption from '@/src/components/atomo/InputOption'
import { addPlant } from '@/src/storage/plant-storage'
import { color } from '@/src/styles/colors'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

export default function AddPlantPage() {
    const [plant, setPlant] = useState("")
    const [name, setName] = useState('')

    const handleSubmit = async () => {
        if (!plant) {
            Alert.alert("Erro ao Adicionar" , "Você precisa adicionar a especie da sua planta")
            return;
        }
        
        if (!name) {
            Alert.alert("Erro ao Adicionar" , "Você precisa adicionar o nome da sua planta")
            return;
        } 

        const result = await addPlant(name, plant);

        if (result) {
            router.back();
        } else {
            Alert.alert("Erro ao Adicionar" , "Infelizmente não foi possivel adicionar a sua nova planta")
            router.back();
        }

    }

    return (
        <ScrollView style={styles.page}>
            <Image
                source={require("../../assets/bg-add-plant.png")}
                style={styles.image}
            />
            <ButtonBack />
            <View style={styles.container}>
                <Text style={styles.titulo}>Adicione uma nova planta na sua vida:</Text>


                <View style={styles.containerOption}>
                <Text style={styles.texto}>Qual o seu tipo de planta:</Text>
                    <InpuOption onChange={setPlant} text="Espada de São Jorge" />
                    <InpuOption onChange={setPlant} text="Lírio da Paz" />
                    <InpuOption onChange={setPlant} text="Peperômia" />
                    <InpuOption onChange={setPlant} text="Cactos" />
                    <InpuOption onChange={setPlant} text="Figueira benjamim" />
                    <InpuOption onChange={setPlant} text="Costela de Adão" />
                    <InpuOption onChange={setPlant} text="Nerium" />
                    <InpuOption onChange={setPlant} text="Palmeira de jardim" />
                    <InpuOption onChange={setPlant} text="Hera inglesa" />
                </View>

                <Text style={styles.texto}>Planta escolhida : {plant}</Text>


                <Text style={styles.texto}>Qual o nome que gostaria de dar a planta :</Text>

                <View>
                    <TextInput style={styles.input} 
                        placeholder='Nome:' 
                        placeholderTextColor={color.utils.subText} 
                        onChangeText={(e) => setName(e)} 
                    />

                    <ButtonSubmit title='Adicionar' onPress={handleSubmit} />
                </View>

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    page: {
        backgroundColor: color.green.bg,
        flex: 1,

    },

    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 30,
        paddingBottom: 150,
    },

    containerOption: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10
    },

    image: {
        maxWidth: 440,
        width: "100%",
        height: 269,
    },

    titulo: {
        fontSize: 32,
        fontWeight: '500',
        color: color.green[500],
    },

    texto: {
        fontSize: 16,
        color: color.green[500],
    },

    input: {
        backgroundColor: color.gray[100],
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 20,
        color: color.utils.subText,
        marginBottom: 10,
    },

})