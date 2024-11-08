import { Alert, Linking, Modal, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { color } from "@/src/styles/colors";
import Option from "../../atomo/option";
import Label from "../../atomo/label";
import { styles } from "./style";

type Props = {
    id: string
    category: string
    name: string
    specie: string
    status: string
}


export default function ModalTaskItem({ category, name, specie, id  , status = "pendente"}: Props) {
    const [close, setClose] = useState(true)

    return (
        <Modal transparent visible={close} animationType="slide">
            <View style={styles.modal}>
                <View style={styles.modalContent}>

                    <View style={styles.modalHeader}>

                        <Text style={styles.modalCategory}>{category}</Text>

                        <TouchableOpacity onPress={() => setClose(!close)}>
                            <MaterialIcons name="exit-to-app" size={20} color={color.utils.black} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.modalInfo}>

                        <View style={styles.modalInfoContainer}>
                            <Text style={styles.titulo} >{name}</Text>
                            <Text style={styles.subTitulo}>{specie}</Text>
                        </View>

                        <Label text={status} variant={status}/>

                    </View>

                    <View style={styles.optionContainer}>
                        <Option name="Excluir" icon="delete-sweep" variant="secundary"  />
                        <Option name="Concluir" icon="done-all" />
                    </View>
                </View>

            </View>
        </Modal>
    )
}
