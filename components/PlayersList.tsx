import React from 'react'
import { View, Text } from 'react-native'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import PlayerListItem from './PlayerListItem';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allPlayersState, filteredPlayers } from '../atom/Players';

const PlayersList = () => {
    // const [players] = useRecoilState(allPlayersState);
    const players = useRecoilValue(filteredPlayers);

    // setInterval(() => setPlayers([]), 5000);

    return (
        <BottomSheetFlatList
            data={players}
            renderItem={({ item }) => 
            <PlayerListItem player={item} /> } 
          />
    )
}

export default PlayersList
