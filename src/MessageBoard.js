import React, { Component } from 'react'
import Message from './Message'
import './MessageBoard.css'


class MessageBoard extends Component{

    state={
        u_messages:[]
    }

    getUserMessages = ()=>{
        fetch('http://localhost:3000/user_messages',{
          method: "GET",
          headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(res => res.json())
        .then(user_messages => {
            // console.log(user_messages)
            this.setState({u_messages:user_messages})
        })
      }
      componentDidMount =() =>{
        this.getUserMessages()
      }


    render(){
        console.log(this.state.u_messages)
        return(

            <table class="table" align="center" >
                <tbody>
                    <tr>
                        <th>
                            <h3>
                                User
                            </h3>
                        </th>
                        <th>
                            <h3>
                                PlainText
                            </h3>
                        </th>
                        <th>
                            <h3>
                                Cipher
                            </h3>
                        </th>
                        </tr>
                    {this.state.u_messages.map(m=>{
                    return   <Message m={m}/>
                    })}

                    
                </tbody>
            </table>
        )
    }

}
export default MessageBoard