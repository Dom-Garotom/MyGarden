import { StyleSheet, View } from 'react-native'
import ButtonIten from '../../atomo/buttonIten'
import { color } from '@/src/styles/colors'

export default function NavBar() {
    return (
        <View style={styles.navBar}>
            <ButtonIten icon="home" size={15} select />
            <ButtonIten icon="auto-awesome-mosaic" size={15} />
            <ButtonIten icon="article" size={15} />
            <ButtonIten icon="person" size={15} />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
      backgroundColor: color.green.bg,
      flex: 1,
      padding: 24,
    },
  
  
    navBar:{
      flexDirection: "row",
      justifyContent:"space-between"
    }
  })
  
