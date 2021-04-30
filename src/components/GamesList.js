import React from 'react';
import { FlatList, Image, Pressable, StyleSheet } from 'react-native';

export default function GamesList(props) {
  return (
    <FlatList
      data={props.games}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable style={styles.gameContainer}>
          <Image source={{ uri: item.cover }} style={styles.game} />
        </Pressable>
      )}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    marginBottom: 10,
  },
  contentContainer: {
    paddingLeft: 15,
  },
  game: {
    height: 120,
    width: 120,
    borderRadius: 6,
    marginRight: 15,
  },
  gameContainer: {
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
});

