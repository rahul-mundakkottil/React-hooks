// use reducer is used  to manage the state .it is similar to usestate but usereducer is used for manage complex states and it have mor benifial properties
// its pattern is similar to redux
// 
import React,{Component,useReducer,useState} from 'react' // visit https://www.reactnative.express/app/data_management/usereducer
import {
     View,
     Text,
     StyleSheet
} from 'react-native'
//function functionname(pevious state,action)
function function2(state,action){  // if we call dispatchfn it automatically call the function2
   switch(action){
    case "incerase":return{...state,value:state.value+1} 
  

    case "decerase":return{...state, value:state.value-1} 
    
    case "setgreen":return{...state,colour:"green"} 

    case "setblue":return{...state,colour:"blue"} 
    default:break;
   
   }
}
const initialstate={
    value:5
}

 export default function Usereducer (){
   
    
    //const[value,dispatchfunction]=useReducer(reducerfunction,initialvalue)
    const [state,dispatchfn]=useReducer(function2,initialstate);
  
    return (
       < View style={styles.viewstyle}>
    <Text style={{  color:"red",  fontSize:20,  fontWeight:'bold'}}>{state.value}</Text>
        <Text style={styles.textstyle} onPress={()=>{dispatchfn("increase")}}>increase</Text>
        <Text style={styles.textstyle} onPress={()=>{dispatchfn("decrease")}} >decrease</Text>
        <Text style={styles.textstyle} onPress={()=>{dispatchfn("setgreen")}} >change to green</Text>
        <Text style={styles.textstyle} onPress={()=>{dispatchfn("setblue")}} >change to blue</Text>
       </View>

    )

 }
 const styles=StyleSheet.create({

viewstyle:{ 
    height:'100%',
    width:'100%',
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center'
},
textstyle:{
    color:'black',
    fontSize:20,
    fontWeight:'bold'
}
 })
