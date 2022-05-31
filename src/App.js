//sempre começar importando o React de 'react e {} de 'react-native'. à medida em que for necessitando de mais coisas, importamos daqui.
import React, {useState} from 'react';
import {
Text,
SafeAreaView,
StyleSheet,
TouchableOpacity,
} from 'react-native';


const App = () => {
    //o primeiro valor será nosso estado, em variável, e o segundo será uma função que irá mudá-lo
    const [numero, setNumero] = useState (0)
    // Quando temos uma função que lida com algo, geralmente a começamos com handle
    function handleNumero(){
        //multiplicamos por 10 para trazer o número para frente, pois com a função random geralmente gera-se um número em decimal e bastante extenso, ex: 0,25938 e o floor o arredonda
        //caso queiramos aumentar o escopo dos números gerados, podemos multiplicar por 100, 1000, etc.
        const novoNum = Math.floor(Math.random()* 100)
        //desta forma, o segundo state (a função setNumero), para gerar um número aleatório, pode ser chamada, executando o que queremos que a função faça.
        setNumero(novoNum)
    }

//para nosso app, retornamos esta parte (o que será visível)
//ao invés de botar o número 0 no nosso text, botamos a constante numero, que criamos ali em cima
    return (
        <SafeAreaView style={style.bg}>
            <Text style={style.num}> {numero} </Text>
            <TouchableOpacity onPress={handleNumero} style={style.botao}>
                <Text style={style.txt}> Toca </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default App;

const style = StyleSheet.create({
    bg:{
        backgroundColor:'black',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    txt:{
        fontWeight:'bold',
        fontSize:25,
        color:'black',
    },
    num:{
        fontSize:50,
        marginBottom:30,
        color:'white',
    },
    botao:{
        backgroundColor:'white',
        width:'30%',
        paddingHorizontal:5,
        paddingVertical:10,
        borderRadius:20,
        alignItems:'center'
    },
})