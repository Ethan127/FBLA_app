import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  const [outputText, setOutputText] = useState('This is a test. Repeat: this is a test.\n');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.centered}>{outputText}</Text>
      <Button title="Change Text" onPress={() => setOutputText( ((outputText == 'This is a test. Repeat: this is a test.\n') ? 'Or is it?\n' : 'This is a test. Repeat: this is a test.\n') )} />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  centered: {
    textAlign: 'center',
  },
});
