import React,{Component,createContext,useContext} from 'react'
import {
     View,
     Text,
     StyleSheet
} from 'react-native'
 const theme={                         // usecotest used for pass one value from component to component
    light:{colur:"red",size:25},    // like props in class components
    dark:{colur:"black",size:20}
 }
 const themecontest=createContext(theme.dark)
 export default function Usecontest (){
    const theme2=useContext(themecontest)
    
    return (
       < View style={styles.viewstyle}>
        <Text style={{color:theme2.colur,fontSize:theme2.size}}>USECONTEST</Text>
       
       </View>

    )

 }
 const styles=StyleSheet.create({

viewstyle:{ 
    height:'100%',
    width:'100%',
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center'
},
textstyle:{
    color:'black',
    fontSize:20,
    fontWeight:'bold'
}
 })
