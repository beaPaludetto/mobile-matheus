import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Link } from "expo-router"
import { styles } from "./styles"

export default function Index() {
    const PRODUTO = [
        {
            id: 1,
            name: "Gelato Vanilla Tradicional Pequeno",
            description: "100g de Gelato Vanilla Tradicional Paludetto’s no bowl pequeno.",
            price: 15.00,
            image: require("@/assets/images/vanillaP.jpg")
        },
        {
            id: 2,
            name: "Gelato Vanilla Tradicional Médio",
            description: "200g de Gelato Vanilla Tradicional Paludetto’s no bowl médio.",
            price: 20.00,
            image: require("@/assets/images/vanillaM.jpg")
        },
        {
            id: 3,
            name: "Gelato Vanilla Tradicional Grande",
            description: "300g de Gelato Vanilla Tradicional Paludetto’s no bowl grande.",
            price: 30.00,
            image: require("@/assets/images/vanillaG.jpg")

        }
    ]
    const BASE = [
        {
            id: 1,
            name: "Gelato a base de leite",
            description: "Gelato a base de leite, com sabor de baunilha.",
            IMAGE: require("@/assets/images/leite.jpg")

        },
        {
            id: 2,
            name: "Gelato a base de água",
            description: "Gelato a base de água, com sabor de baunilha.",
            IMAGE: require("@/assets/images/agua.jpg")
        }

    ]

    const ADICIONAL = [
        {
            id: 1,
            name: "Casca de biscoito",
            description: "Casquinha de biscoito crocante.",
            price: 1.00,
            IMAGE: require("@/assets/images/casquinha.jpg")
        },
        {
            id: 2,
            name: "Caldas e Molhos",
            description: "chocolate, caramelo, frutas, doce de leite, mel, pasta de amendoim e creme de avelã.",
            price: 2.00,
            IMAGE: require("@/assets/images/caldas.jpg")
        },
        {
            id: 3,
            name: "Frutas Frescas ou compotas",
            price: 5.00,
            description: "frescas como: morango, kiwi, banana, manga e frutas vermelhas; secas como: damasco, figo e passas.",
            IMAGE: require("@/assets/images/frutas.jpg")
        },
        {
            id: 4,
            name: "Nuts",
            price: 5.00,
            description: "castanhas, nozes, amêndoas, avelãs e pistaches.",
            IMAGE: require("@/assets/images/nuts.jpg")
        },
        {
            id: 5,
            name: "Cremes e recheios",
            price: 5.00,
            description: "Chantilly, mousse ou ricota doce.",
            IMAGE: require("@/assets/images/chantily.jpg")
        },
        {
            id: 6,
            name: "Favo de baunilha",
            description: "Aromatizar e entriquecer a apresentação.",
            price: 5.00,
            IMAGE: require("@/assets/images/favo.jpg")
        }
    ]


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.restaurantName}>PALUDETTO's</Text>
                <Text style={styles.subtitle}>Gelateria</Text>
                <Text>_________________________________________________________</Text>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleName}>Gelato Vanilla</Text>
            </View>
            <View>
                <Image style={styles.produtoImg} source={require("@/assets/images/vanilla.jpg")}></Image>
                <Text style={styles.header}>_________________________________________________________</Text>
            </View>
            <ScrollView style={styles.produtoList}>

                <Text style={styles.size}>Escolha o tamanho:</Text>
                {
                    PRODUTO.map((item) => (

                        <TouchableOpacity style={styles.produtoItem}>
                            <View style={styles.produtoContent}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDescription}>{item.description}</Text>
                                <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                            </View>
                            <Image style={styles.produtoImage} source={item.image} />
                        </TouchableOpacity>

                    ))
                }
                <Text style={styles.size}>Escolha a base:</Text>
                {
                    BASE.map((item) => (

                        <TouchableOpacity style={styles.produtoItem}>
                            <View style={styles.produtoContent}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDescription}>{item.description}</Text>
                            </View>
                            <Image style={styles.baseImage} source={item.IMAGE} />
                        </TouchableOpacity>

                    ))
                }
                <Text style={styles.size}>Adicionais?:</Text>
                {
                    ADICIONAL.map((item) => (

                        <TouchableOpacity style={styles.produtoItem}>
                            <View style={styles.produtoContent}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDescription}>{item.description}</Text>
                                <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                            </View>
                            <Image style={styles.baseImage} source={item.IMAGE} />
                        </TouchableOpacity>

                    ))
                }
            </ScrollView>

            <Text style={styles.adc}>Adicionar à sacola</Text>

        </View>
    )
}

