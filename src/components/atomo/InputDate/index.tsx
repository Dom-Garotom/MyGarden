import { addTask } from '@/src/storage/task-storage';
import { color } from '@/src/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    returnDate : ( e : string) => void ,
    type : "date" | "time"
}

export default function InputDate({ returnDate , type}:Props) {
    const [date, setDate] = useState(new Date()); 
    const [show, setShow] = useState(false); 

    useEffect(()=>{
        onChange( new Date )
    },[])

    const onChange = ( selectedDate ?: Date) => {
        const currentDate = selectedDate || date;
        setShow(false); 
        setDate(currentDate);
        returnDate(type === 'date' ? formatDate(currentDate) : formatTime(currentDate))
    };

    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
        return `${day}/${month}/${year}`;
    };

    const formatTime = (date: Date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return (
        <View style={{width: "50%"}}>
            <Text style={styles.titulo}>{type === 'date' ? "Data :" : "Hora :"}</Text>
            <TouchableOpacity style={styles.input} onPress={ () => setShow(!show)}>
                <Text style={styles.text}>{ type === 'date' ? formatDate(date) : formatTime(date)}</Text>
                <MaterialIcons name='arrow-drop-down' size={20}/>
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    value={date}
                    mode={type}
                    display="compact"
                    onChange={ (event , date) => onChange(date)}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        padding: 10,
        backgroundColor: color.utils.white,
        borderRadius: 10,
        flexDirection:'row'
    },

    text:{
        flex: 1,
    },

    titulo:{
        fontWeight:'600',
        color: color.gray[800],
        padding: 5,
    },
})
