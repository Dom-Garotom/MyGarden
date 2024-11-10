import { Alert, Image, ScrollView, Text, TextInput, View } from 'react-native'
import ButtonBack from '@/src/components/atomo/buttonBack'
import ButtonSubmit from '@/src/components/atomo/buttonSubmit'
import InpuOption from '@/src/components/atomo/InputOption'
import { router } from 'expo-router'
import React, { useState } from 'react'
import InputDate from '@/src/components/atomo/InputDate'
import { styles } from './style'
import { color } from '@/src/styles/colors'
import { addTask } from '@/src/storage/task-storage'

export default function AddTAskPage() {
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const handleSubmit = async () => {
        if (!category) {
            Alert.alert("Erro ao Adicionar", "Você precisa adicionar a categoria da sua Task")
            return;
        }

        if (!name) {
            Alert.alert("Erro ao Adicionar", "Você precisa adicionar o nome da sua Task")
            return;
        }

        const result = await addTask(name, date , time ,category);
        console.log(result);
        

        if (result) {
            Alert.alert("Task Adicionada", "Sua nova task foi adicionada com sucesso.")
            router.back();
        } else {
            Alert.alert("Erro ao Adicionar", "Infelizmente não foi possivel adicionar a sua nova Task")
            router.back();
        }

    }

    return (
        <ScrollView style={styles.page}>
            <Image
                source={require("../../assets/bg-add-task.jpg")}
                style={styles.image}
            />
            <ButtonBack />
            <View style={styles.container}>
                <Text style={styles.titulo}>Qual task desejá adicionar :</Text>

                <View style={styles.containerOption}>
                    <InpuOption onChange={setCategory} text="Regar a minha planta" />
                    <InpuOption onChange={setCategory} text="Trocar os potes" />
                    <InpuOption onChange={setCategory} text="Adubar a sua planta" />
                    <InpuOption onChange={setCategory} text="Tirar a planta do sol " />
                    <InpuOption onChange={setCategory} text="Colocar sua planta no sol " />
                </View>

                <Text style={styles.texto}>Task escolhida : {category}</Text>

                <View>
                    <Text style={styles.texto}>Nome da Planta:</Text>
                    <TextInput style={styles.input}
                        placeholder='Nome:'
                        placeholderTextColor={color.gray[500]}
                        onChangeText={(e) => setName(e)}
                    />
                </View>

                <View style={styles.containerDate}>
                    <InputDate
                        type='date'
                        returnDate={(e: string) => setDate(e)}
                    />
                    <InputDate
                        type='time'
                        returnDate={(e: string) => setTime(e)}
                    />
                </View>

                <ButtonSubmit title='Adicionar' onPress={handleSubmit} />
            </View>
        </ScrollView>
    )
}

