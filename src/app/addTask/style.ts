import { StyleSheet } from 'react-native'
import { color } from '@/src/styles/colors'

export const styles = StyleSheet.create({
    page: {
        backgroundColor: color.green.bg,
        flex: 1,

    },

    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 10,
        paddingBottom: 150,
    },

    containerOption: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 5,
    },

    containerDate:{
        flexDirection:'row',
        gap: 2,
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
        padding: 5,
        fontSize: 16,
        fontWeight:'500',
        color: color.green[500],
    },

    input: {
        backgroundColor: color.utils.white,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 20,
    },

})