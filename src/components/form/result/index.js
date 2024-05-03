
import React, {useState, useEffect} from "react";
import {Text, SafeAreaView, Share, TouchableOpacity, View } from 'react-native'
import styles from "./style";
export default function ResultImc(props){
    const onshare = async() =>{
        const result = await Share.share({
            message: "Meu IMC é" + props.resultImc
        })
    }
    const [classification, setClassificiation] = useState(null)
    useEffect(() => {
        let newClassification;
        if ( props.resultImc <= 16.9 && props.resultImc >= 1)  {
            newClassification = "Muito abaixo do peso";
            setClassificiation("Sua classificação é: "+ newClassification);
        } else if (props.resultImc >= 17 && props.resultImc < 18.4) {
            newClassification = "Abaixo do peso";
            setClassificiation("Sua classificação é: "+ newClassification);
        } else if (props.resultImc >= 18.5 && props.resultImc <= 24.9) {
            newClassification = "Peso normal";
            setClassificiation("Sua classificação é: "+ newClassification);
        } else if (props.resultImc >= 25 && props.resultImc <= 29.9) {
            newClassification = "Acima do peso";
            setClassificiation("Sua classificação é: "+ newClassification);
        } else if (props.resultImc >= 30 && props.resultImc <= 34.9) {
            newClassification = "Obesidade grau I";
            setClassificiation("Sua classificação é: "+ newClassification);
        } else if (props.resultImc >= 35 && props.resultImc <= 40) {
            newClassification = "Obesidade grau II";
            setClassificiation("Sua classificação é: "+ newClassification);
        } else if (props.resultImc > 40) {
            newClassification = "Obesidade grau III";
            setClassificiation("Sua classificação é: "+ newClassification);
        }else{
            setClassificiation(null)
        }
    }, [props.resultImc]);

    return(
        <SafeAreaView style={styles.BoxResultImc}> 
            
            <Text style={styles.Information}>
                {props.messageResultImc}
            </Text > 
            <Text style={styles.Imc}> {props.resultImc}</Text>
            <Text style={styles.Information} >{classification} </Text>
            <SafeAreaView style={styles.boxShare}>
                { props.resultImc != null ?
                    <TouchableOpacity style={styles.shareButton} onPress={onshare} > 
                        <Text style={styles.Sharetext} >
                        Compartilhar
                        </Text>     
                    </TouchableOpacity>
                    :
                    <View/>
                }       
            </SafeAreaView>
            </SafeAreaView>
    )
}   