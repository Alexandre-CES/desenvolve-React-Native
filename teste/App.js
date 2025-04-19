import { React } from 'react';
import { View, Text, Image } from 'react-native';

const App = ()=>{
    return (
        <View>
            <Text style={{fontSize:25,color:'blue', textAlign:'center'}}>
                Olá programadores, tudo bem?
            </Text>
            <Image 
                source={require('./src/reactNative.png')}
                style={{width:100, height:100}}
            />
        </View>
    )
}

export default App;