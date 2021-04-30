import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import friendsData from '../../assets/friends.json';

export default function DescriptiveGamesList(props) {
  return (
    <FlatList
      data={props.games}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          style={({ pressed }) => [
            styles.gameContainer,
            pressed && styles.gameContainerPressed,
          ]}
        >
          <Image source={{ uri: item.cover }} style={styles.game} />

          <View style={styles.gameDetails}>
            <Text style={styles.gameTitle}>{item.title}</Text>

            <Text style={styles.gameFriendsCount}>
              4 friends play
            </Text>

            <View style={styles.gameFriends}>
              {friendsData.friends.slice(0, 4).map((friend) => (
                <Image
                  key={friend.id}
                  source={{ uri: friend.picture }}
                  style={styles.gameFriend}
                />
              ))}
            </View>
          </View>
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
    height: 140,
    width: 140,
  },
  gameContainer: {
    width: 140,
    backgroundColor: '#444',
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    borderRadius: 6,
    overflow: 'hidden',
    marginRight: 15,
  },
  gameContainerPressed: {
    opacity: 0.8,
  },
  gameDetails: {
    padding: 10,
  },
  gameTitle: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
  gameFriendsCount: {
    color: 'gray',
    fontSize: 12,
    marginVertical: 4,
  },
  gameFriends: {
    flexDirection: 'row',
  },
  gameFriend: {
    height: 24,
    width: 24,
    borderRadius: 12,
    marginRight: 6,
  },
});

