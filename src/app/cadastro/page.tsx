import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"
import { Link } from "expo-router";

export default function CadastroPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.restaurantName}>PALUDETTO's</Text>
        <Text style={styles.subtitle}>Gelateria</Text>
        <Text>_________________________________________________________</Text>
      </View>
      <Text style={styles.cadastro}>Cadastro</Text>
      <View style={styles.CadastroInput}>
        <View>
          <Text style={styles.textInput}>Nome:</Text>
          <TextInput style={styles.campoInput} placeholder="Digite seu nome completo"></TextInput>
        </View>
        <View>
          <Text style={styles.textInput}>CPF:</Text>
          <TextInput style={styles.campoInput} placeholder="Digite seu cpf"></TextInput>
        </View>
        <View>
          <Text style={styles.textInput}>E-mail:</Text>
          <TextInput style={styles.campoInput} placeholder="Digite seu email" ></TextInput>
        </View>
        <View>
          <Text style={styles.textInput}>Senha:</Text>
          <TextInput style={styles.campoInput} placeholder="Digite uma senha" secureTextEntry></TextInput>
        </View>
        <View>
          <Text style={styles.textInput}>Confirme sua senha:</Text>
          <TextInput style={styles.campoInput} placeholder="Digite sua senha" secureTextEntry></TextInput>

          <Link href={"/home/page"} asChild>
            <TouchableOpacity style={styles.inputSenha}>
              <Text style={styles.enviar}>Enviar</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>

  )
}