import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import ButtonIcon from './ButtonIcon';
import Icon from './Icon';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default function AnimatedHeader(props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 15 }]}>
      <AnimatedBlurView
        intensity={100}
        tint="dark"
        style={[
          StyleSheet.absoluteFill,
          {
            opacity: props.scroll.interpolate({
              inputRange: [0, 50],
              outputRange: [0, 1],
            }),
          },
        ]}
      />

      <View style={styles.headerLeft}>
        <Icon name="logo-xbox" size={28} color="white" />
      </View>

      <View style={styles.headerRight}>
        <ButtonIcon icon="wifi-outline" style={styles.wifiIcon} />
        <ButtonIcon icon="notifications-outline" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
  },
  wifiIcon: {
    marginRight: 10,
  },
});

