import { React } from 'react';
import { 
    View,
    Text, 
    Image, 
    ScrollView, 
    FlatList, 
    TextInput, 
    Button, 
    TouchableOpacity,
    Switch,
    ActivityIndicator
} from 'react-native';

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
            <View style={{marginTop:20}}>
                <TouchableOpacity onPress={() => alert('Cadastro realizado com sucesso!')}>
                    <Text style={{color:'red', fontSize:20, backgroundColor:'yellow'}}>Cadastrar2</Text>
                </TouchableOpacity>

                <Switch value={true} onValueChange={(value)=>{
                    
                }}/>

                <ActivityIndicator size={'large'} color={'blue'}/>

            </View>
            
        </View>
        </ScrollView>
    )
}

export default App;