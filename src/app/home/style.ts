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

    headerImage: {
        width: "85%",
        height: 200,
        borderRadius: 8,
        margin: 30
    },

    restaurantName: {
        fontSize: 30,
        marginTop: 16,
        alignSelf: "center",
        color: "#5c5c5c"
    },
    
    subtitle: {
        flexDirection: "row",
        fontSize: 15,
        marginTop: 4,
        alignSelf: "center",
        color: "#5c5c5c"
    },

    tabs: {
        flexDirection: "row",
        padding: 16,
        gap: 16,
        justifyContent: "center",
    },

    tabsName: {
        color: "#666",
        fontSize: 20
    },

    menuList: {
        padding: 16,
        flex: 1,
    },

    menuItem: {
        flexDirection: "row",
        borderBottomColor: "#dedede",
        borderBottomWidth: 20,
        backgroundColor: "#f5f5f5",
        borderRadius: 20
    },

    menuContent: {
        flex: 1,
        marginRight: 16,
        padding: 9
    },

    menuImage: {
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
    },

    priceDescription: {
        marginTop: 4,
    }
})