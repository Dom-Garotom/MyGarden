import { Tabs } from 'expo-router'
import React from 'react'
import ButtonIten from '../components/atomo/buttonIten'
import { MaterialIcons } from '@expo/vector-icons'
import { color } from '../styles/colors'

export default function Layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { backgroundColor: color.green[200] },
      tabBarActiveTintColor: color.green[500],
      tabBarInactiveTintColor: color.gray[100],
      tabBarItemStyle: {alignItems: 'center' , marginVertical: 5}
    }}
    >
      <Tabs.Screen name='index'
        options={{
          tabBarIcon: (color) => (<MaterialIcons name='home' size={20} color={color.color} />),

        }}
      />

      <Tabs.Screen name='myPlants/index'
        options={{
          tabBarIcon: (color) => (<MaterialIcons name='eco' size={20} color={color.color} />),
        }}
      />

      <Tabs.Screen name='addPlant/index'
        options={{
          tabBarIcon: (color) => (<MaterialIcons name='add-circle' size={20} color={color.color} />),
        }}
      />
      
      <Tabs.Screen name='addTask/index'
        options={{
          tabBarIcon: (color) => (<MaterialIcons name='post-add' size={20} color={color.color} />),
        }}
      />

    </Tabs>
  )
}
