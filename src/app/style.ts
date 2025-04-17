import { StyleSheet } from "react-native"

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

    login: {
        fontSize: 24,
        color: "#5c5c5c",
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 30

    },

    loginInput: {
        marginTop: 30
    },

    campoInput: {
        backgroundColor: "#f5f5f5",
        marginBottom: 10,
        borderRadius: 20,
        margin: 10,
        padding: 15
    },

    textInput: {
        marginLeft: 20,
        color: "#272727"
    },

    inputSenha: {

        alignSelf: "center",
        marginTop: 20,
        backgroundColor: "#5c5c5c",
        borderRadius: 40
    },

    enviar: {
        color: "#f5f5f5",
        padding: 20
    },
    
    criar: {
        color: "#5c5c5c",
        alignSelf: "center",
        marginTop: 30,
    }
})