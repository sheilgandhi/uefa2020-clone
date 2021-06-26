import * as React from 'react';
import { StyleSheet, SafeAreaView, Platform, Text, View, Pressable } from 'react-native';
import Field from '../components/Field'
import TeamStats from '../components/TeamStats';

export default function TabOneScreen() {

  const viewPlayers = () => {
    console.log("View Player")
  }

  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />
      <Field />

      <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
        <Text>View Players</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 25 : 0, // https://stackoverflow.com/questions/51289587/react-native-how-to-use-safeareaview-for-android-notch-devices/55017347 SafeAreaView for android
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#72CC5E",
  },
  buttonContainer: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: "auto",
  }
});
