import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { StoreProvider } from "easy-peasy";
import store from './store/index'
import ComponentTest from './component'

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#eaeaea' }}>
      <StoreProvider store={store}>
        <ComponentTest />
      </StoreProvider>
    </SafeAreaView>
  );
};

export default App;
