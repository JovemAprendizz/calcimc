
        import React, { useEffect, useState} from 'react';
        import {Text, TextInput,TouchableOpacity, SafeAreaView, Vibration, Keyboard, Pressable} from 'react-native';
        import ResultImc from './result';
        import styles from "./style";
        import useStorage from '../../dates/index';
        import AsyncStorage from '@react-native-async-storage/async-storage';



        export default function Form(){
            const [height, setHeight] = useState(null);
            const [weight, setWeight] = useState(null);
            const [messageImc, setMessageImc] = useState ("Preencha o peso,  altura e nome");
            const [imc, setImc] = useState(null);
            const [TextButton, setTextButton ] = useState("Calcular IMC");
            const [error, setError] = useState(null);
            const [name, setname] = useState(null);
            const {saveImc} = useStorage();  

            function ImcCalculator(){
                let heightFormat = height.replace(",",".")
                return setImc ((weight/(heightFormat * heightFormat)).toFixed(2))
            };  
            
            useEffect(  ()=>{
                async function salvar() {
                    await saveImc("@imcs", {imc, name})
                }
                salvar()
            }, [imc, name ])
            function Verification(bolean) {
                if (bolean == false) {
                    Vibration.vibrate(); 
                    setError("Campo Obrigatório*")
                }else{
                    setError(null)
                }
            };

            async function ValidationIMC() {
                if(weight != null && height != null){
                    Verification(true)
                    ImcCalculator()
                    setHeight(null)
                    setWeight(null)   
                    setMessageImc( name + " Seu imc é igual: ");
                    return
                }
                else{
                    Verification(false)
                    setHeight(null)
                    setWeight(null)   
                    setImc(null)
                    setTextButton("Calcular IMC")
                    setMessageImc(" Insira os valores: \n altura, peso e nome");
                }
            };

            return(

                <Pressable onPress={Keyboard.dismiss} style={styles.boxForm}>
                    <SafeAreaView style={styles.Textform} > 
                        <Text style={styles.LabelForm} >Nome: </Text>
                        <Text style={styles.errorMensage} > {error} </Text>
                        <TextInput style={styles.InputForm} placeholder='Ex. Joao'  onChangeText={setname} value={name} ></TextInput>
                        <Text style={styles.LabelForm} >Altura: </Text>
                        <Text style={styles.errorMensage} > {error} </Text>
                        <TextInput style={styles.InputForm} placeholder='Ex. 1.75' keyboardType='numeric' onChangeText={setHeight} value={height} ></TextInput>
                        <Text style={styles.LabelForm} >Peso: </Text>
                        <Text style={styles.errorMensage}> {error} </Text>
                        <TextInput style={styles.InputForm} placeholder='Ex. 55' keyboardType='numeric' onChangeText={setWeight} value={weight} ></TextInput>
                        <TouchableOpacity style={styles.buttonForm} onPress={() => ValidationIMC()}>
                        <Text style={styles.textButtonForm}> {TextButton} </Text>  
                        </TouchableOpacity>
                    </SafeAreaView>
                    <ResultImc messageResultImc={messageImc} resultImc={imc}></ResultImc>
                </Pressable>
                
            );
        }