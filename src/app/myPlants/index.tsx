import ButtonBack from '@/src/components/atomo/buttonBack'
import PlantItem from '@/src/components/molecula/plantItem'
import { getPlant } from '@/src/storage/plant-storage'
import { color } from '@/src/styles/colors'
import { Plant } from '@/src/utils/plantsInfo'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native'

export default function MyPlantsPage() {
  const [dataPlants, setPlants] = useState<Plant[]>([])

  useEffect(() => {
    handlePlant()
  }, [])

  const handlePlant = async () => {
    const data = await getPlant();

    if (data) {
      setPlants(data)
    }
  }

  const renderHeader = () => (
    <View >
      <Image
        source={require("../../assets/bg-myPlant.png")}
        style={styles.image}
      />
      <ButtonBack />
      <View style={styles.container}>
        <Text style={styles.titulo}>Aqui estão as suas plantas :</Text>
      </View>
    </View>
  )

  const renderItem = ({ item }: ListRenderItemInfo<Plant>) => (
    <View style={styles.container}>
      <PlantItem
        id={item.id}
        sun={item.sun}
        name={item.name}
        toxic={item.toxic}
        water={item.water}
        species={item.species}
        location={item.location}
        difficulty={item.difficulty}
        recommended={item.recommended}
      />
    </View>
  )

  // Testando um novo jeito de organizar uma flatList em uma page

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      style={styles.page}
      data={dataPlants}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  )
}


const styles = StyleSheet.create({
  page: {
    backgroundColor: color.green.bg,
    flex: 1,

  },

  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
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

})