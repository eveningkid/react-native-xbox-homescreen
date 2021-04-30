import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function FriendsList(props) {
  return (
    <FlatList
      data={props.friends}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable style={styles.user}>
          <View>
            <Image
              source={{ uri: item.picture }}
              style={styles.picture}
            />

            <View style={styles.connected} />
          </View>

          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.currentGame}>{item.currentGame}</Text>
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
  user: {
    backgroundColor: '#444',
    padding: 20,
    marginRight: 15,
    width: 130,
    borderRadius: 4,
  },
  picture: {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginBottom: 15,
  },
  connected: {
    position: 'absolute',
    bottom: 25,
    right: 0,
    height: 15,
    width: 15,
    borderRadius: 8,
    backgroundColor: 'green',
    borderWidth: 3,
    borderColor: '#444',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  currentGame: {
    color: 'gray',
    fontSize: 12,
  },
});

