import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

export default function StatusScreen({navigation}) {

  const goToPage = () => {
    navigation.navigate('home')
  }

  return (
    <SafeAreaView>
      <Text>StatusScreen</Text>
      <Button title="Ir a home" onPress={goToPage} />
    </SafeAreaView>
  )
}