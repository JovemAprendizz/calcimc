
import React, {useState} from 'react';
import {Text, TextInput,TouchableOpacity, SafeAreaView, Vibration, Share } from 'react-native';
import ResultImc from './result';
import styles from "./style";
export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState ("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton ] = useState("Calcular IMC")
    const [error, setError] = useState(null)
 

    function ImcCalculator(){
        return setImc ((weight/(height* height)).toFixed(2))
        
    }


    function Verification(bolean) {
        if (bolean == false) {
            Vibration.vibrate(); 
            setError("Campo Obrigatório*")
        }else{
            setError(null)
        }
    }

    function ValidationIMC() {
        if(weight != null && height != null){
            Verification(true)
            ImcCalculator() 
            setHeight(null)
            setWeight(null)   
            setMessageImc("Seu imc é igual: ");
            return
        }
        else{
            Verification(false)
            setHeight(null)
            setWeight(null)   
            setImc(null)
            setTextButton("Calcular IMC")
            setMessageImc(" insira os valores: altura e peso");
        }
    }

    return(
        <SafeAreaView style={styles.boxForm}>
            <SafeAreaView style={styles.Textform} > 
                <Text style={styles.LabelForm} >Altura</Text>
                <Text style={styles.errorMensage} > {error} </Text>
            <TextInput style={styles.InputForm} placeholder='Ex. 1.75' keyboardType='numeric' onChangeText={setHeight} value={height} ></TextInput>
                <Text style={styles.LabelForm} >Peso</Text>
                <Text style={styles.errorMensage}> {error} </Text>
                <TextInput style={styles.InputForm} placeholder='Ex. 55' keyboardType='numeric' onChangeText={setWeight} value={weight} ></TextInput>
                <TouchableOpacity style={styles.buttonForm} onPress={() => ValidationIMC()}>
                    <Text style={styles.textButtonForm}> {TextButton} </Text>  
                </TouchableOpacity>
            </SafeAreaView>
            <ResultImc messageResultImc={messageImc} resultImc={imc}></ResultImc>
        </SafeAreaView>
        
    );
}