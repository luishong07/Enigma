import React from 'react'

const Message =(props)=>{
    // style={
    //     "text-align":"center"
    // }


   
        if(!props.m){
            return null
        }
        // console.log(props.m,"heck")
        
        return(
            
                <tr>
                    <td >{props.m.user.username}</td>
                    <td >{props.m.message.plain}</td>
                    <td >{props.m.message.cipher}</td>
                    

                </tr>

               
           
        )
    
}
export default Message