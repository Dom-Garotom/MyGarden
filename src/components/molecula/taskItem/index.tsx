import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Label from '../../atomo/label'
import { color } from '@/src/styles/colors'

type Props = {
  plantName : string
  species : string
  status : "task" | "pendente" | "conclude"
}


export default function TaskItem( {plantName , species , status} : Props) {
    return (
        <View style={styles.item}>

            <Image
                style={styles.Image_item}
                source={require("@/src/assets/image-plant.png")}
            />

            <View style={styles.text_container}>
                <Text style={styles.text_title}>{plantName}</Text>
                <Text style={styles.text_subTitle}>{species}</Text>
            </View>

            <View>
                <Label text={status} variant="task" />
            </View>

        </View>
    )
}



const styles = StyleSheet.create({  
    item: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      height: 62
    },
  
    Image_item: {
      width: 45,
      height: 45,
      borderRadius: 100,
      marginRight: 10,
    },
  
    text_container: {
      flex: 1,
    },
    text_title: {
      fontWeight: '600',
      fontSize: 14,
    },
    text_subTitle: {
      fontWeight: "400",
      fontSize: 13,
      color: color.utils.subText
    },
})
  