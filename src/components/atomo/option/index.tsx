import { color } from '@/src/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

type Props = TouchableOpacityProps & {
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
    variant?: "primary" | "secundary"
}

export default function Option({ name, icon, variant = "primary", ...props }: Props) {
    return (
        <View>
            <TouchableOpacity {...props}  style={styles.container}>
                <MaterialIcons name={icon} size={20} style={variant === "primary" ? styles.primary : styles.secundary} />
                <Text style={variant === "primary" ? styles.primary : styles.secundary}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 20,
        gap: 5,
    },

    primary: {
        color: color.green[300],
        fontWeight: '600',
    },

    secundary: {
        color: "#FE556A",
        fontWeight: '600',
    }
})