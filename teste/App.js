import { React } from 'react';
import { View, Text, Image, ScrollView, FlatList, TextInput, Button } from 'react-native';

const App = ()=>{
    return (
        <ScrollView>
        <View style={{alignItems:'center'}}>
            
            <Text 
                style={{
                    fontSize:25,
                    color:'blue', 
                    textAlign:'center'
                }}
            >
                Olá programadores, tudo bem?
            </Text>
            <Image 
                source={require('./src/reactNative.png')}
                style={{width:300, height:300}}
            />
            <FlatList
                data={[{key:'Arroz'}, {key:'feijão'}, {key:'açucar'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
            <TextInput
                placeholder='Digite seu nome'
                placeholderTextColor={'black'}
                style={{
                    height:40,
                    borderColor:'Gray',
                    borderWidth:1,
                    backgroundColor:'#69BFEF',
                    color:'black'
                }}
            />

            <View style={{marginTop:20}}>
                <Button
                    title='Cadastrar'
                    onPress={() => alert('Cadastro concluído com sucesso!')}
                />
            </View>
            
        </View>
        </ScrollView>
    )
}

export default App;