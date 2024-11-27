
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Practica01 from './practicas/pr01/components/Practica01';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {

  function laquesea(){
    Alert.alert("la que sea");
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <Practica01 />
    </SafeAreaView>
  );
}


export default App;
