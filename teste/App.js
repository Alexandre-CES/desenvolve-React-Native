import { React, Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
    render(){
        let nome = 'Alexandre';
        let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18Gt9viR2yfaYTVjyutOeMAGk6sFTje4g2A&s';
    
        return (
            <View style={{height:'100%', backgroundColor:'white'}}>
                <Text>Meu primeiro App</Text>
                <Text style={{color:'blue', fontSize:30, margin:70}}>Vamos Programar</Text>
                <Text style={{color:'blue', fontSize:30, left:150}}>{nome}</Text>
                <Image 
                    source={{uri:img}}
                    style={{width:300, height:300, left:50}}
                />
            </View>
        )
    }
}

export default App;