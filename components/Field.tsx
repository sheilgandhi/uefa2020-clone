import React from 'react'
import { StyleSheet, ImageBackground, SafeAreaView, Platform, Text, View } from 'react-native';

import field from '../assets/images/field.jpg';
import FieldPlayer from './FieldPlayer';

// 433
const players: { [key: string]: null[] } = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GK: [null],
}

const Field = () => {
    return (
      <ImageBackground
      source={field}
      resizeMode="contain"
      style={{
        width: "100%",
        aspectRatio: 2 / 3,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {Object.keys(players).map((pos) => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {players[pos].map((player, index) => (
            <FieldPlayer key={index} player={player} pos={pos} />
          ))}
        </View>
      ))}
    </ImageBackground>
    )
}

export default Field
