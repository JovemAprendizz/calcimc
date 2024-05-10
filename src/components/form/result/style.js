import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    BoxResultImc:{
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',

    },
    Imc:{
        fontSize: 48,
        color: '#ff0043',
        fontWeight: 'bold'
    },
    Information:{
        fontSize: 18,
        color: '#ff0043',
        fontWeight: 'bold'
    },
    boxShare:{
            width: '100%',
            height: 40,
            alignItems: 'center',
            marginTop: 30,
        },
    shareButton:{
        backgroundColor: "#1877f2",
        borderRadius: 50,
        height: 30,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Sharetext:{
        color: "#fff",
        fontWeight: 'bold',
        
    }
});
export default styles;