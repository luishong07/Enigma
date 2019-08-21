import React, { Component } from "react";
import { thisExpression } from "@babel/types";


class LogIn extends Component{

    state={
        username:'',
        password:''
    }


    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
          });
    }

    onSubmit = (e) =>{
        e.preventDefault()
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username:this.state.username,
                password:this.state.password
            })
        })
        .then(res => res.json())
        .then(result => {
            console.log(result.error,"llevela");
        localStorage.setItem("token", result.auth_token)
        localStorage.setItem("id", result.id)

        if(result.error==true){
           { this.props.history.push('/login')}
        }
        else{
            { this.props.history.push('/')}
        }

        // result.error ==true? () => { this.props.history.push('/login')} : () => { this.props.history.push('/')}
        })
        // .then(result =>{
        //     console.log(result)
        //     // result.error ==true? () => { this.props.history.push('/login')}:() => { this.props.history.push('/')}
        //     // () => { this.props.history.push('/')}
        // })

    }

    render(){
        return(
            <div>
                <h1>Enigma</h1>
                <h2>LogIn</h2>
                <div>
                    <form>
                        <label>Username</label>
                        <input name="username" value={this.state.username} onChange={(e)=>this.onChange(e)}/>
                        <label>Password</label>
                        <input name="password" value={this.state.password} onChange={(e)=>this.onChange(e)}/>
                        <button type="submit" onClick={this.onSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default LogIn