import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { WebView } from 'react-native-webview';


export default function App() {
  return (
    
      <WebView 
                    source={{ uri: 'https://widgets.bingewave.com/stream/[live_event_id]'}}
                    style={{flex:1, marginTop: 100}}
                    javaScriptEnabled={true}    
                    allowsInlineMediaPlayback={true}     
                />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
