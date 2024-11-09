import { color } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ModalPLantItem from "../modalPlantItem";
import { Plant } from "@/src/utils/plantsInfo";

export default function PlantItem({ name, species, difficulty ,id ,location , recommended , sun , toxic ,water }: Plant) {
  const [modalOpen , setModalOpen] = useState(false);

  const onPresUser = () => {
    setModalOpen(!modalOpen);
  }


  return (
    <TouchableOpacity style={styles.item} onPress={onPresUser}>

      <Image
        style={styles.Image_item}
        source={require("@/src/assets/image-plant.png")}
      />

      <View>
        <View style={styles.text_container}>
          <Text style={styles.textName}>{name} - </Text>
          <Text style={styles.textSpecies}>{species}</Text>
        </View>

        <View style={styles.containerItemLabel}>
          <View style={styles.itemLabel}>
            <MaterialIcons name='cloud-queue' size={20} />
          </View>
          <View style={styles.itemLabel}>
            <MaterialIcons name='sunny' size={20} />
          </View>
          <View style={styles.itemLabel}>
            <MaterialIcons name="water-drop" size={20} />
          </View>

        </View>


        {modalOpen &&
          <ModalPLantItem
          key={id}
          name={name}
          species={species}
          dificult={difficulty}
          lacalization={location}
          water={water}
          recomended={recommended}
          sun={sun}
          />
        }

      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  Image_item: {
    width: 50,
    height: 55,
    borderRadius: 100,
    marginRight: 10,
  },

  itemLabel: {
    backgroundColor: color.green[200],
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 15,
  },

  containerItemLabel: {
    flexDirection: 'row',
    gap: 5,
  },

  text_container: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },

  textName: {
    fontSize: 18,
    fontWeight: '600',
    color: color.gray[600]
  },

  textSpecies: {
    fontSize: 16,
    fontWeight: '400',
    color: color.gray[600]
  },

})
