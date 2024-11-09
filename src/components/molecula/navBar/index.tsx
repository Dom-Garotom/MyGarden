import { SafeAreaView, StyleSheet} from 'react-native'
import ButtonIten from '../../atomo/buttonIten'
import { color } from '@/src/styles/colors'
import { router } from 'expo-router'

export default function NavBar() {
    return (
        <SafeAreaView style={styles.navBar}>
            <ButtonIten icon="home" size={15} select  onPress={() => router.push("/")} />
            <ButtonIten icon="eco" size={15} onPress={() => router.push("/myPlants")}/>
            <ButtonIten icon="article" size={15} />
            <ButtonIten icon="person" size={15} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    navBar:{
      backgroundColor: color.green[200],
      height: 62,
      flexDirection: "row",
      justifyContent:"space-between",
      alignItems: 'center',
      paddingHorizontal: 24,
    }
  })
  
