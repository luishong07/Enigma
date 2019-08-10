import React, { Component } from 'react'


class OutputBoard extends Component{



   
    
    render(){
        // console.log(this.props.show())
        return(
            <div>
                <label>Message:</label>
                <input type="text" id="plaintext" onKeyPress={this.props.show}/>
                <label>Cipher:</label>
                <input type="text" id="cipher" value={this.props.c} />


                
            </div>
        )
    }
}
export default OutputBoard