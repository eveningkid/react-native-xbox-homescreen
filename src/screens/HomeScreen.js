import React, { useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedHeader from '../components/AnimatedHeader';
import Icon from '../components/Icon';
import UserGames from '../components/UserGames';
import FriendsList from '../components/FriendsList';
import GamesList from '../components/GamesList';
import DescriptiveGamesList from '../components/DescriptiveGamesList';
import Header from '../components/Header';
import gamesData from '../../assets/games.json';
import friendsData from '../../assets/friends.json';

const FRIENDS = friendsData.friends;
const GAMES = gamesData.games;

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView
      edges={['right', 'bottom', 'left']}
      style={styles.container}
    >
      <AnimatedHeader
        scroll={scrollY}
        headerLeft={<Icon name="logo-xbox" size={28} color="white" />}
        headerRight={<></>}
      />

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <UserGames games={GAMES} />

        <Header action="See all">Active friends</Header>
        <FriendsList friends={FRIENDS} />

        <Header>Jump back in</Header>
        <GamesList games={GAMES} />

        <Header>Popular with friends</Header>
        <DescriptiveGamesList games={GAMES} />

        <Header>Popular on Xbox</Header>
        <GamesList games={GAMES} />

        <Header>Recommended from Game Pass</Header>
        <GamesList games={GAMES} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
});

