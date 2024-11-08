import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import Label from '../../atomo/label'
import { styles } from './style'
import ModalTaskItem from '../modalTaskItem'

type Props = TouchableOpacityProps & {
  category: string
  plantName : string
  species : string
  status : string
  onPres ?: () => void
}

export default function TaskItem( {plantName , species , category , status = "pendente", onPres, ...props} : Props) {
    const [modalOpen , setModalOpen] = useState(false);

    const onPresUser = () => {
      setModalOpen(!modalOpen);
      onPres && onPres();
    }

    return (
        <TouchableOpacity {...props} onPress={onPresUser}  style={styles.item}>

            <Image
                style={styles.Image_item}
                source={require("@/src/assets/image-plant.png")}
            />

            <View style={styles.text_container}>
                <Text style={styles.text_title}>{plantName}</Text>
                <Text style={styles.text_subTitle}>{species}</Text>
            </View>

            <View>
                <Label text={status} variant={status} />
            </View>


            {modalOpen &&
              <ModalTaskItem
                category={category}
                name={plantName}
                specie={species}
                status={status}
                id=""
              />
            }

        </TouchableOpacity>
    )
}



