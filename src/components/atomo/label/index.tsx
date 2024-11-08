import {  View , Text} from "react-native";
import { styles } from "./styles";

type Props = {
  text: string
  variant: string
}

export default function Label({ text, variant }: Props) {

  const getVariant = () =>{
    switch(variant){
      case "pendente":
         return styles.pendente;
      case "conclude":
        return styles.conclude;
      case "task" :
        return styles.task;
      default: 
        return {};
    }
  }

  return (
    <View style={[getVariant()]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

