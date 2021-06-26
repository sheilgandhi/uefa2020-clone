import React from 'react'
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // https://icons.expo.fyi/

type FieldPlayerProps = {
    player: null,
    pos: string,
}

const FieldPlayer = (props: FieldPlayerProps) => {
    const { player, pos } = props;

    return (
        <View style={{ alignItems: 'center' }}>
            <FontAwesome5 name="tshirt" size={35} color={player ? "#d170db" : "#5c5c5cbb"} />
            <Text style={{ backgroundColor: "#333333bb", color: "white", fontWeight: "bold", fontSize: 12, padding: 2, paddingHorizontal: 7 }}>{pos}</Text>
        </View>
    )
}

export default FieldPlayer
