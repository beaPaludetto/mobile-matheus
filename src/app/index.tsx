import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style"

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.restaurantName}>PALUDETTO's</Text>
        <Text style={styles.subtitle}>Gelateria</Text>
        <Text>_________________________________________________________</Text>
      </View>
      <Text style={styles.login}>Login</Text>
      <View style={styles.loginInput}>
        <View>
          <Text style={styles.textInput}>E-mail</Text>
          <TextInput style={styles.campoInput} placeholder="Digite seu email"></TextInput>
        </View>
        <View>
          <Text style={styles.textInput}>Senha</Text>
          <TextInput style={styles.campoInput} placeholder="Digite sua senha" secureTextEntry></TextInput>
        </View>

        <Link href={"/home/page"} asChild>
          <TouchableOpacity style={styles.inputSenha}>
            <Text style={styles.enviar}> Enviar</Text>
          </TouchableOpacity>
        </Link>
        <Link style={styles.criar} href={"/cadastro/page"}>Crie sua conta</Link>
      </View>
    </View>
  )
} 