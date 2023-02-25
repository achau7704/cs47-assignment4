import { FlatList, Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, Pressable } from "react-native";
import { millisToMinutesAndSeconds } from "../utils"
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationContainer } from '@react-navigation/native';

const windowWidth = Dimensions.get("window").width;

export default function Song( {songArtists, albumName, songTitle, imageUrl, duration, index, navigation, previewUrl, externalUrl} ) {
    let preview = null;
    if (previewUrl==undefined) {
        preview = navigation.navigate("PreviewScreen", {url: externalUrl});
    } else {
        preview = navigation.navigate("PreviewScreen", {url: previewUrl});
    }

    return (
        <View style={styles.song}>
            <Icon style={{fontSize: "25%"}} name = "play" color = "green" onPress={() => {preview}}/>
            <Image style={styles.image} source={{uri: imageUrl}}/>
            <View style={styles.view}>
                <Pressable onPress={() => {preview}}>
                    <Text style={{color: "white", fontWeight: "bold", fontSize: 12}} numberOfLines={1}>{songTitle}</Text>
                    <Text style={{color: "white"}}>{songArtists}</Text>
                </Pressable>
            </View>
            <Text style={{color: "white", width: 0.225 * windowWidth}} numberOfLines={1} >{albumName}</Text>
            <Text style={{color: "white", width: 0.1 * windowWidth}}>{millisToMinutesAndSeconds(duration)}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
song: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "white",
    padding: 3,
},
image: {
    width: 0.17 * windowWidth,
    height: 50,
    margin: 8,
},
view: {
    width: 0.3 * windowWidth,
}
});


