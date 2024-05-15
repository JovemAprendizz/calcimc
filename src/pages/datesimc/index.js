    import { View, Text, SafeAreaView, TouchableOpacity, FlatList} from "react-native";
    import styles from './style'
    import React, { useEffect, useState} from 'react';
    import {useIsFocused} from '@react-navigation/native'
    import AsyncStorage from "@react-native-async-storage/async-storage";
    import useStorage from '../../dates/index';
    
    export default function DatesImc() {
        const [listImc, setlistImc] = useState([]);
        const focused = useIsFocused();
        const { getImcs } = useStorage();
    
        useEffect(() => {
            async function loadImcs() {
                let imcs = await getImcs("@imcs");
                setlistImc(imcs);
            }
            loadImcs()
        }, [focused])
    
        // Filtra os itens que têm nome e IMC preenchidos
    
        const filteredListImc = listImc.filter(item =>  item.name && item.imc);
    
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.mainContainer}>
                    <Text style={styles.Title}>
                        Meus Dados
                    </Text>
                </View>
                {filteredListImc.length > 0 && (
                    <View style={styles.containerDates}>
                        <FlatList
                            data={filteredListImc}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <Text>Nome: {item.name}, IMC: {item.imc}</Text>
                            )}
                            style={styles.list}
                        />
                    </View>
                )}
            </SafeAreaView>
        );
    }
    