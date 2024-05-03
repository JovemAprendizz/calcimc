
import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from "./style";

export default function Title(){
    return(
        <SafeAreaView style={styles.boxTitle} >
            <Text style={styles.textTitle} > ONEBITHEALHT</Text>
        </SafeAreaView>
    )
}