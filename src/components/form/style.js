import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxForm:{
        width: '100%',
        height: '100%',
        padding: 40,
        bottom: 0,
        backgroundColor: '#FFf', 
        alignItems: 'center',   
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    Textform:{
        padding: 20,
        width:'100%',
        height:"auto",
        backgroundColor: '#e0e0e0',
        borderRadius: 15,
     },
     LabelForm:{
        fontSize: 18,
        paddingLeft: 20,
        padding: 5,
     },
     InputForm:{
        width: '90%',
        height: 40,
        borderRadius: 50,
        padding: 5,
        margin: 12,
        backgroundColor: '#f6f6f6',
     },
     textButtonForm:{
        fontSize: 20,
        color: "#FFF",
    },
     buttonForm:{
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30, 
     },
     errorMensage:{
      fontSize: 12,
      color: "red",
      fontWeight: 'bold',
      paddingLeft: 20,
     },
     
});
export default styles;
