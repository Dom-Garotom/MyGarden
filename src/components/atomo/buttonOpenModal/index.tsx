import { color } from '@/src/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import ModalCreateThing from '../../molecula/modalCreateThing'

export default function ButtonOpenModal() {
    const [openModal, setOpen] = useState(false)

    return (
        <View>
            {openModal == false &&
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => setOpen(!openModal)} >
                    <MaterialIcons name='add' size={20} color={"white"} />
                </TouchableOpacity>
            }

            {openModal &&
                <ModalCreateThing close={setOpen} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: color.green[500],
        position: 'absolute',
        right: 15,
        bottom: 25,
    },
})
