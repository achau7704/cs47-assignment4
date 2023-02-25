import { FlatList, Text, StyleSheet, View } from "react-native";
import Song from "./Song";
import Header from "./Header";

const SongList = ({ tracks, navigation }) => {
    const renderSong = ( item, index ) => {
        const song = tracks[item]
        console.log(item)
        return (
                <Song
                    navigation = {navigation}
                    index = {index + 1}
                    songArtists = {item.songArtists[0].name}
                    albumName = {item.albumName}
                    songTitle = {item.songTitle}
                    imageUrl = {item.imageUrl}
                    duration = {item.duration}
                    trackNumber = {item.trackNumber}
                    previewUrl = {item.previewUrl}
                    externalUrl = {item.externalUrl}
                />
        );
    };
    return (
        <>
        <Header/>
        <FlatList
            data={tracks}
            renderItem = {({item, index}) => {
                return (
                    renderSong(item, index)
                )
            }}
            keyExtractor={(item) => item.id}
        />
        </>
    );
};



export default SongList;