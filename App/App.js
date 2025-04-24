import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Text
} from "react-native";
import { db } from "./src/firebaseConnection";


export default function Fire(){
    
    
    
    return(
        <View style={styles.container}>
            <Text style={{fontSize:24}}>Firebase</Text>
            
        </View>
    );
    
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    
})