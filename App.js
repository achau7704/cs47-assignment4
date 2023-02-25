import { StyleSheet, SafeAreaView, Text, Pressable } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <SongList navigation={navigation} tracks={tracks}/>;
  } else {
    contentDisplayed = (<SpotifyAuthButton authenticationFunction={getSpotifyAuth}/>);
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  }
});

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Homescreen" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
      <Stack.Screen name="PreviewScreen" component={PreviewScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}


