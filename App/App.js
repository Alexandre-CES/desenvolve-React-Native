import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from "react-native";

class App extends Component{
    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.titulo}>Cronômetro</Text>
                <Image 
                source={require('./src/cronometro.png')}
                style={styles.crono}
                />

                <Text style={styles.tempo}>0.0</Text>

                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.botaoTexto}>Iniciar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.botaoTexto}>Limpar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'orange',
        justifyContent:'center'
    },
    crono:{
        width:400,
        height:400
    },
    titulo:{
        fontSize:50,
        fontWeight:'600'
    },
    tempo:{
        marginTop:-210,
        fontSize:60,
        fontWeight:'700'
    },
    botaoTexto:{
        fontSize:24,
        fontWeight:'500'
    },
    btn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:8,
        borderRadius:11,
        backgroundColor:'white'
    },
    areaBotao:{
        flexDirection:'row',
        marginTop:100,
    }
})

export default App;