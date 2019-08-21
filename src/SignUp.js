import React, { Component } from "react";

class SignUp extends Component{
    state={
        username:'',
        password:''
    }




    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    // function to make request
    onSubmit = (e) => {
        // e.preventDefault()
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username:this.state.username,
                password:this.state.password
            })
        })
        .then(data => data.json())
        .then(result=> {
            console.log(result,"HERE!!")
            localStorage.setItem("token",result.auth_token)
            localStorage.setItem("id",result.id)
        })
        .then( () => { window.location.replace('http://localhost:3001/login') })

    }

    
    render(){
        console.log(this.state.username,this.state.password,"user and password")

        return(
            <div>
            <h1>Enigma</h1>
            <h2>Sign Up</h2>
            
                <div>
                    <form>
                        <label>Username</label>
                        <input name="username"  value ={this.state.username} onChange={(e)=>{this.onChange(e)}}/>
                        <label>Password</label>
                        <input name="password" value={this.state.password} onChange={(e)=>{this.onChange(e)}}/>
                        <button type="submit" onClick={this.onSubmit}>Sign Up</button>

                    </form>
                </div>
            
            </div>
        )
    }
}
export default SignUp