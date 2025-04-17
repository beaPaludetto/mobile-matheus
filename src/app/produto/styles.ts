
import { isAbsolute } from "path";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        //ocupar a tela inteira
        flex: 1,
        backgroundColor: "#dedede"
    },

    header: {
        padding: 16
    },


    restaurantName: {
        fontSize: 30,
        marginTop: 16,
        alignSelf: "center",
        color: "#5c5c5c"
    },

    subtitle: {
        fontSize: 15,
        marginTop: 4,
        alignSelf: "center",
        color: "#5c5c5c"
    },
    produtoImg: {
        height: 180,
        width: 380,
        alignSelf: "center",
        borderRadius: 28
    },
    title: {
        alignSelf: "center",
    },
    titleName: {
        color: "#5c5c5c",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 20,
    },
    size: {
        fontSize: 17,
        marginLeft: 20,
        color: "#5c5c5c",
        marginBottom: 10,
    },
    produtoList: {
        padding: 16,
        flex: 1,
    },

    produtoItem: {
        flexDirection: "row",
        borderBottomColor: "#dedede",
        borderBottomWidth: 20,
        backgroundColor: "#f5f5f5",
        borderRadius: 20
    },

    produtoContent: {
        flex: 1,
        marginRight: 16,
        padding: 9
    },

    produtoImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginTop: 15,
        marginRight: 15
    },
    itemName: {
        fontSize: 18,
        marginTop: 8
    },

    itemDescription: {
        color: "#666",
        marginTop: 4
    },

    itemPrice: {
        fontSize: 16,
        marginTop: 5,
    },
    baseImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        margin: 15
    },
    adc: {
        fontSize: 20,
        marginTop: 10,
        backgroundColor: "#5c5c5c",
        color: "#fff",
        padding: 10,
        textAlign: "center",
        borderRadius: 8,
        margin: 20
    }
})