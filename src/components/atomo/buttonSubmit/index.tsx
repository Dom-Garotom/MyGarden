import { color } from "@/src/styles/colors"
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps &{
    title : string
}

export default function ButtonSubmit( {title , ...props} : Props) {
    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonDefault}  {...props}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonDefault: {
        width: "100%",
        borderRadius: 10,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.green[50],
    },

    buttonText: {
        color: color.utils.white,
        fontWeight: '700'
    },
})