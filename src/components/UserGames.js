import React, { useRef } from 'react';
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function UserGames(props) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <>
      {props.games.map((game, index) => (
        <Animated.Image
          key={game.id}
          source={{ uri: game.screenshots[0] }}
          blurRadius={30}
          style={{
            width: '100%',
            height: 400,
            position: 'absolute',
            zIndex: 0,
            left: 0,
            right: 0,
            opacity: scrollX.interpolate({
              inputRange: [
                (index - 1) * 300,
                index * 300,
                (index + 1) * 300,
              ],
              outputRange: [0, 1, 0],
            }),
          }}
        />
      ))}

      <LinearGradient
        colors={['rgba(0, 0, 0, 0.3)', '#222']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 400,
        }}
      />

      <Animated.ScrollView
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        snapToInterval={300}
        snapToAlignment="start"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {props.games.map((game) => (
          <View key={game.id} style={styles.game}>
            <ImageBackground
              source={{ uri: game.screenshots[0] }}
              style={styles.cover}
            >
              <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
                style={styles.overlay}
              >
                <Text style={styles.title}>{game.title}</Text>
                <Text style={styles.editor}>{game.editor}</Text>
              </LinearGradient>
            </ImageBackground>
          </View>
        ))}
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 120,
    paddingBottom: 15,
    paddingLeft: 15,
  },
  game: {
    marginRight: 15,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  cover: {
    height: 300,
    width: 300,
    borderRadius: 6,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 15,
  },
  title: {
    color: 'white',
    fontSize: 34,
  },
  editor: {
    color: 'white',
  },
});

