import { SafeAreaView, StyleSheet, View } from "react-native"
import { color } from "../styles/colors"
import NavBar from "../components/molecula/navBar"
import AllTaskContainer from "../components/organismo/allTaskContainer"
import ButtonOpenModal from "../components/atomo/buttonOpenModal"
import * as Notifications from "expo-notifications"




export default function index() {

  Notifications.setNotificationHandler({
    handleNotification: async  () => ({
      shouldPlaySound:true,
      shouldSetBadge: true,
      shouldShowAlert: true,
    }),
  })


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content} >
        <AllTaskContainer />
      </View>
      <ButtonOpenModal/>
      <NavBar />
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: color.green.bg,
    flex: 1,
    paddingBottom: 20,
  },

  content: {
    height: "95%",
    paddingHorizontal: 24,
    paddingBottom: 3,
    paddingTop: 10,
    width: "100%",
  },

})