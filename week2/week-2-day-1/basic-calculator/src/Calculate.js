import React from 'react'

export default function Calculate(props){
    //props.boxOne
    //props.boxTwo
    //props.selection
    let Add, Subtract, Multiply,Divide, result
    console.log(props.selection)

    props.selection==="Add"?Add=true:false
    props.selection==="Subtract"?Subtract=true:false
    props.selection==="Multiply"?Multiply=true:false
    props.selection==="Divide"?Divide=true:false

    
    if(Add){result=(+props.boxOne)+(+props.boxTwo)}
    else if(Subtract){result=(+props.boxOne)-(props.boxTwo)}
    else if(Multiply){result=+(props.boxOne)*(props.boxTwo)}
    else if(Divide){result=+(props.boxOne)/(props.boxTwo)}
    
    console.log(result)
    
    return(
        <h1>Result: {result}</h1>
    )
    
    
}