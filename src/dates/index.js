//ess componente será usado para pegar os dados do imc e guarda-los na async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () =>{
    const getImcs = async (key)=>{
       
        try {
            const data = await AsyncStorage.getItem(key);
            const imcs =  JSON.parse(data) || [];
            return imcs;
        } catch (error) {
            console.log('erro ao buscar', error);
            return [];
        }
    };

    const saveImc = async (key, value) => { 
        try {
            if (value != null) {
                let dadosSalvos = await getImcs(key);
                    dadosSalvos.push(value);
                    await AsyncStorage.setItem(key, JSON.stringify(dadosSalvos));
            }
        } catch(error) {
            console.log('erro ao salvar', error);
        }
    };
    
    
    const removeImc = async (key, value)=>{
        try{                                                                    
            let dadosSalvos = await getImcs(key);
            let mydates = dadosSalvos.filter((dados)=>{
                return(dados !== value)
            })

            await AsyncStorage.setItem(key, JSON.stringify(mydates));            
            return mydates;

        }catch(error){
            console.log('Error ao remover o item', error );
        };
    };

    return{
        getImcs,
        saveImc,
        removeImc
    };
    
};

export default useStorage;

