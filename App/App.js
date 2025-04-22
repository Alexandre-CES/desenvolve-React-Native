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
            <View style={StyleSheet.container}>

                <Text style={StyleSheet.titulo}>Cronômetro</Text>
                <Image 
                source={require('./src/cronometro.png')}
                style={StyleSheet.crono}
                />

                <Text style={StyleSheet.tempo}>0.0</Text>

            </View>
        );
    }
}

export default App;