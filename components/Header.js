import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import images from "../assets/Images/images";

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={images.spotify} style={styles.headerIcons}/> 
            <Text style={styles.title}>My Top Tracks</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerIcons: {
        height: 20,
        width: 20,
    },
    title: {
        fontSize: 28,
        color: "white",
        fontWeight: "bold",
        padding: 4,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
    },
});

export default Header;