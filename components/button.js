import { TouchableOpacity,View,Text,StyleSheet } from "react-native";
export default function Button({onPress,text}){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        borderRadius: 1,
        padding:20,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "flex-end",
        width:150,
        margin:10
        

    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    }
})
