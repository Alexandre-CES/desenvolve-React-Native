import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from "react-native";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero : 0,
            botao : 'Iniciar',
            ultimo: null
        };
        this.tempo = null;
        this.inicio = this.inicio.bind(this);
        this.limpar = this.limpar.bind(this);
    
    }
    
    inicio(){
        if(this.tempo != null){
            clearInterval(this.tempo);
            this.tempo = null;
            this.setState({botao:'iniciar'});
        }else{
            this.tempo = setInterval(() => {
                this.setState({numero:this.state.numero + 0.1});
            }, 100);
        }

        this.setState({botao:'Parar'});
    }

    limpar(){

    }
    
    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.titulo}>Cronômetro</Text>
                <Image 
                    source={require('./src/cronometro.png')}
                    style={styles.crono}
                />

                <Text style={styles.tempo}>{this.state.numero.toFixed(1)}</Text>

                <View style={styles.areaBotao}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.inicio}
                    >
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