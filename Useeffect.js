import React,{Component,useState,useEffect} from 'react'
import {
     View,
     Text,
     StyleSheet
} from 'react-native'

 export default function Useeffect (){  // when it write in programme it works automatically and used to perfome the 
    const [count,setcount]=useState(0)  // baground and non baground operations automatically and continusly
 useEffect(()=>{
    setInterval(()=>{
        setcount(count+10)},1000
        )
 })
    return (
       < View style={styles.viewstyle}>
        <Text style={styles.textstyle}>{count}</Text>
        <Text style={styles.textstyle} >automatic</Text>
       
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
