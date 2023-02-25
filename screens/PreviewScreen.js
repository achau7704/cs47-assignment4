import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import Song from "../components/Song";
import SongList from "../components/SongList";

const PreviewScreen = ({ route, navigation }) => {
  const params = route.params.url
  return (
     <WebView
       source={{
         url: params
       }}
     />
  )
}

export default PreviewScreen

const styles = StyleSheet.create({})