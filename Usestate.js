import React,{Component,useState} from 'react'
import {
     View,
     Text,
     StyleSheet
} from 'react-native'

 export default function Usestate (){
    const [count,setcount]=useState(0)
    const increase=()=> setcount( count=>count+1)
    const decrease=()=>setcount(count=>count-1)
    return (
       < View style={styles.viewstyle}>
        <Text style={styles.textstyle}>{count}</Text>
        <Text style={styles.textstyle} onPress={increase}>increase</Text>
        <Text style={styles.textstyle}  onPress={decrease}>decrease</Text>
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
