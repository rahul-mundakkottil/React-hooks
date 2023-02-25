// use reducer is used  to manage the state .it is similar to usestate but usereducer is used for manage complex states and it have mor benifial properties
// its pattern is similar to redux
// 
import React,{Component,useReducer,useState} from 'react'
import {
     View,
     Text,
     StyleSheet
} from 'react-native'
//function functionname(pevious state,action)
function function2(state,action){  // if we call dispatchfn it automatically call the function2
    if(action=="increase")
    {return state+1;}

    if(action=="decrease")
    {return state-1;}
    
}

 export default function Usereducer (){
    //const[value,dispatchfunction]=useReducer(reducerfunction,initialvalue)
    const [count,dispatchfn]=useReducer(function2,0)
  
    return (
       < View style={styles.viewstyle}>
        <Text style={styles.textstyle}>{count}</Text>
        <Text style={styles.textstyle} onPress={()=>{dispatchfn("increase")}}>increase</Text>
        <Text style={styles.textstyle} onPress={()=>{dispatchfn("decrease")}} >decrease</Text>
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
