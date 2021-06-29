import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text, Image, ImageBackground, TextInput} from 'react-native'

export default class Home extends React.Component{
    render (){
        return(
            <ImageBackground
                source={require('../images/back.png')}
                style={{width:"100%", height:"100%"}}>

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 40,
                        alignItems: "center",
                        paddingHorizontal:40
                    }}>
                       
                </View>

                <View style={{paddingHorizontal:40, marginTop: 25}}>
                    <Text style={{
                        fontSize:40,
                        color: "#522289",
                        fontFamily: "RobotoBold"
                    }}>
                    Olá, Bem Vindo (a)   
                </Text>

                    <Text style={{
                        fontSize: 15,
                        paddingVertical:10,
                        paddingRight: 80,
                        lineHeight: 22,
                        fontFamily: "RobotoRegular",
                        color: "#a2a2db",
                    }}>
                    
                    Não tenha mais dúvida com termos técnicos, pesquise e iremos direto ao ponto e do jeito certo.

                </Text>

                <View style={{
                    flexDirection:"row",
                    backgroundColor: "#FFF",
                    borderRadius: 40,
                    alignItems: "center",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    marginTop: 30,
                }}>

                    <Image source={require('../images/search.png')} style={{height: 14, width: 14}}/>

                    <TextInput 
                        placeholder="Pesquise seu termo"
                        style={{paddingHorizontal: 20,
                        fontSize: 15,
                        color: "#ccccef"
                    }}
                    />
                </View>


                <ScrollView>
                    
                </ScrollView>












                </View>
            </ImageBackground>
        )
    }
}
/*

import React,{useEffect,useState} from 'react';
import {
  Text,View,FlatList,ActivityIndicator, ScrollView, TextInput, TouchableOpacity, Alert
} from 'react-native';

 export default function App1(){
  
 const [carregando,setCarregando] =useState(true)
 const [dados,setDados] = useState([])


state={
    
    input1:'',
    input2:'',
    nomeTermo:'',
    descTermo:''

  }  
 

  
  return(
    <ScrollView>
   <Text style={{fontSize:45}}>Cadastrar termo</Text>

    <TextInput style={{ height: 40, margin: 12, borderWidth: 1}}
      onChangeText={text => state.nomeTermo = text}
      ref={input => { state.input1 = input }}
      placeholder="Nome termo"
      ></TextInput>


      <TextInput style={{ height: 120, margin: 12, borderWidth: 1, textAlignVertical: 'top'}}
      onChangeText={text => state.descTermo = text}
      ref={input => { state.input2 = input }}
      multiline = {true}
      placeholder="Descrição termo"
      ></TextInput>

   <TouchableOpacity
      style={{ alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10}} 
      
      onPress={() =>{ 
      

        if(state.nomeTermo != '' && state.descTermo != ''){
        state.input1.clear();
        state.input2.clear();
       console.log(state.nomeTermo + ' - ' + state.descTermo);
       fetch('http://termpedia.atwebpages.com/cadastroAPI.php?termo='+state.nomeTermo+'&desc='+state.descTermo)
                  .then((resposta)=>resposta.json)
                  .then((json)=>setDados(json.categorias))
                  .catch(function(error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                    
                      throw error;
                  })
                  .finally(() => setCarregando(false) , Alert.alert('Sucesso','Cadastro concluído com êxito'));
       
                  state.nomeTermo = '';
                  state.descTermo = '';
                  console.log(state.nomeTermo + ' - ' + state.descTermo);
                }
              else{
                Alert.alert('Erro','Um ou mais campos estão em branco');
              }
            }
      }>
      
      <Text>Cadastrar</Text>
    </TouchableOpacity>
   
    </ScrollView>
  );
};

*/