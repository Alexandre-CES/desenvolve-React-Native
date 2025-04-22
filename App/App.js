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
    }
})

export default App;