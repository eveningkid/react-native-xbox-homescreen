import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.children}</Text>

      {props.action && (
        <Pressable>
          <Text style={styles.action}>{props.action}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
  },
  action: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'gray',
  },
});

