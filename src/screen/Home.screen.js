import { Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  const goToPage = () => {
    navigation.navigate("Status");
  };

  return (
    <SafeAreaView>
      <Text>Pantalla de inicio</Text>
      <Button title="Ir a status" onPress={goToPage} />
    </SafeAreaView>
  );
}
