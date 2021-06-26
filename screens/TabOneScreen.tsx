import React, { useRef } from "react";
import { StyleSheet, SafeAreaView, Platform, Text, View, Pressable } from 'react-native';
import Field from '../components/Field'
import TeamStats from '../components/TeamStats';
import PlayerListItem from '../components/PlayerListItem';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { players } from '../assets/data/players';
import Filters from "../components/Filters";

export default function TabOneScreen() {
  const playersBottomSheet = useRef<BottomSheet>();
  const filtersBottomSheet = useRef<BottomSheet>();


  const viewPlayers = () => {
    playersBottomSheet.current?.expand();
  }

  const snapPoints = [0, "50%"];


  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />
      <Field />

      <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
        <Text>View Players</Text>
      </Pressable>

      <BottomSheet
        ref={playersBottomSheet}
        index={0}
        snapPoints={snapPoints}
      >
        <Pressable onPress={() => filtersBottomSheet.current?.expand()} style={styles.buttonContainer}>
          <Text>Filters</Text>
        </Pressable>
          <BottomSheetFlatList
            data={players}
            renderItem={({ item }) => 
            <PlayerListItem player={item} /> } 
          />
      </BottomSheet>
      
      <BottomSheet ref={filtersBottomSheet} index={0} snapPoints={snapPoints}>
        <Filters />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 25 : 0, // https://stackoverflow.com/questions/51289587/react-native-how-to-use-safeareaview-for-android-notch-devices/55017347 SafeAreaView for android
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#4ccf4d",
  },
  buttonContainer: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: "auto",
  },
  contentContainer: {}
});
