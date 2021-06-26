import React from 'react'
import { StyleSheet, ImageBackground, SafeAreaView, Platform, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // https://icons.expo.fyi/

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
        <ImageBackground source={field} 
        resizeMode="contain" 
        style={{ width: '100%', aspectRatio: 2 / 3, justifyContent: 'space-around', alignItems: 'center' }}>
          {
            Object.keys(players) // Will return [FWD, MID, DEF, GK]
              .map((pos) => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                  {players[pos].map((player) => (
                    <FieldPlayer player={player} pos={pos} />
                  ))}</View>
              ))
          }
      </ImageBackground>
    )
}

export default Field
