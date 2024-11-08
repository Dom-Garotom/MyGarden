
import { color } from '@/src/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import ItenModal from '../../atomo/itenModal'
import { router } from 'expo-router'

type Props = {
    close : ( prev : false ) => void
}


export default function ModalCreateThing( { close } : Props) {
    return (
        <Modal transparent animationType='fade'>
            <View style={styles.modal}>
                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.8}  
                    onPress={ () => close(false)}
                >
                    <MaterialIcons name='close' size={20} color={"black"} />
                </TouchableOpacity>

                <ItenModal text='Adicionar uma planta'
                    rigth={22}
                    bottom={192}
                    onPress={ () => router.push("/addPlant")}
                />

                <ItenModal text='Adicionar uma task'
                    rigth={22}
                    bottom={142}
                    onPress={ () => router.push("/addTask")}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)"
    },


    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: color.utils.white,
        position: 'absolute',
        right: 15,
        bottom: 85,
    },

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
