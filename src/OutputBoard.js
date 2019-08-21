import React, { Component } from 'react'


class OutputBoard extends Component{

    state={
        plain:"",
        cipher:""
    }
    
    // enigma =  (e)=>{

        // console.log(e.key)
        // this.setState({value: event.target.value}, function () {
        //     console.log(this.state.value);
        // });
        // this.setState({test:'hola'},()=>{console.log(this.state.test)})
        // console.log(this.state.test)
        // console.log(this.props.l,this.props.m,this.props.r)
        // console.log(this.props.clock)



    // }

    // componentWillMount =()=>{

    // }
    onChange = (e) =>{
        this.setState({
            plain:e.target.value.toUpperCase()
            
        })
        // console.log(  e.target.value)
    }

    createMessage= (e) =>{
        console.log(this.state.plain,"in")
        let cipher = document.getElementById("cipher").innerHTML
        // console.log( test)
        console.log(parseInt(localStorage.getItem("id")))
        let id =parseInt(localStorage.getItem("id"))
        fetch('http://localhost:3000/user_messages',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message:{
                    cipher: cipher,
                    plain: this.state.plain
                },
                   user_id:id

            })
        })
        .then(res => res.json())
        .then(blah => console.log(blah))

    }
   
    
    render(){
        // console.log(this.props.l,this.props.m,this.props.r)

        return(
            <div align="center">
                
                <label>Message:</label>
                <textarea type="text" id="plaintext" onKeyPress={(e)=>{this.props.glow(e);this.props.clock(e)}} value={this.state.plain} onChange={(e)=>this.onChange(e)} onKeyUp={this.props.dim}/>
                <label> Cipher:</label>
                <textarea type="text" id="cipher" value={this.props.cipher}  /><br></br>
                <button onClick={this.createMessage}>Save</button>
                <button onClick={this.props.test}  >Clear</button>



                
            </div>
        )
    }
}
export default OutputBoard