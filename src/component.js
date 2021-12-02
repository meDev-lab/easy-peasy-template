import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStoreState, useStoreActions } from "easy-peasy";

const ComponentTest = () => {
  const title = useStoreState(state => state.title);
  const counter = useStoreState(state => state.counter);
  const inc = useStoreActions(actions => actions.inc);
  return (
    <View>
      <Text>{title}</Text>
      <Text>{counter}</Text>
      <TouchableOpacity onPress={inc}><Text>Increment</Text></TouchableOpacity>
    </View>
  );
};

export default ComponentTest;


