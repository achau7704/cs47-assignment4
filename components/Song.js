import { FlatList, Text, StyleSheet, View, Image, Dimensions } from "react-native";
import { millisToMinutesAndSeconds } from "../utils"

const windowWidth = Dimensions.get("window").width;

export default function Song( {songArtists, albumName, songTitle, imageUrl, duration, index} ) {
    return (
        <View style={styles.song}>
            <Text style={{color: "white", width: 0.1 * windowWidth, margin: 8}}>{index}</Text>
            <Image style={styles.image} source={{uri: imageUrl}}/>
            <View style={styles.view}>
                <Text style={{color: "white", fontWeight: "bold", fontSize: 12}} numberOfLines={1}>{songTitle}</Text>
                <Text style={{color: "white"}}>{songArtists}</Text>
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


