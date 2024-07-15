//arquivo de configuração de rotas
import "@/styles/global.css"

import { View } from "react-native"
import {Slot} from "expo-router"

export default function Layout() {
  return 
  (
    <View className="flex-1 bg-black">
      <Slot />

    </View>
  
  
  )
    
}