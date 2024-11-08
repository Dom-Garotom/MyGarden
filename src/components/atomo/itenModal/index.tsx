import { color } from '@/src/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
    bottom?: number,
    top?: number,
    left?: number,
    rigth?: number,
    text: string,
}

export default function ItenModal({ bottom, left, rigth, text, top, ...props }: Props) {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, {
                bottom: bottom,
                top: top,
                left: left,
                right: rigth
            }]}
            activeOpacity={0.8}
            {...props}
        >

            <TouchableOpacity style={styles.buttonOption} activeOpacity={0.8}  >
                <MaterialIcons name='close' size={15} />
            </TouchableOpacity>

            <Text style={styles.textOption}>{text}</Text>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    buttonContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 10,
        position: 'absolute',
        right: 22,
        bottom: 142,
    },

    buttonOption: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        borderRadius: 100,
        backgroundColor: color.utils.white,
    },

    textOption: {
        backgroundColor: color.utils.white,
        paddingHorizontal: 10,
        borderRadius: 11,
        paddingVertical: 4,
        height: 28,
    },
})
