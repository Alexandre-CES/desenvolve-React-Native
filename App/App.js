import { useEffect, useState } from "react";
import { 
    View,
    StyleSheet,
    Text
} from "react-native";
import { db } from "./src/firebaseConnection";
import {doc, onSnapshot} from 'firebase/firestore';

export default function App(){
    const [nome, setNome] = 
        useState('Carregando...');
        useEffect (() => {
            async function getDados() {
                onSnapshot(doc(db,'usuario','1'),(doc)=>{
                    setNome(doc.data()?.nome);
                })
            }
            getDados();
        }, []
        )
    
    return(
        <View style={styles.container}>
            <Text style={{fontSize:24}}>Usuario: {nome}</Text>
            
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