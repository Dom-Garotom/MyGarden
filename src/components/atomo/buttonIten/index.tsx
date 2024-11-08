import { color } from '@/src/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'


type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    size: number
    select?: boolean 
}

export default function ButtonIten({ icon, size,  select, ...props }: Props) {
    const [isCLicked , setClick] = useState(select)

    return (
        <TouchableOpacity style={isCLicked ? styles.buttonSelected : styles.button } onPressOut={ () => setClick(!isCLicked)} {...props}>
            <MaterialIcons name={icon} size={size} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 40,
        padding: 13,
        backgroundColor: color.green[200],
        borderRadius: 13,
        alignItems: "center"
    },

    buttonSelected:{
        width: 50,
        height: 40,
        padding: 13,
        backgroundColor: color.utils.white,
        borderRadius: 13,
        alignItems: "center"
    }
})