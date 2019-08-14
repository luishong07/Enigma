import React, { Component } from 'react'


class OutputBoard extends Component{



   
    
    render(){
        // console.log(this.props.show())
        return(
            <div align="center">
                
                <label>Message:</label>
                <textarea type="text" id="plaintext" onKeyPress={(e)=>{this.props.glow(e);this.props.clock(e);}}   onKeyUp={this.props.dim}/>
                <label> Cipher:</label>
                <textarea type="text" id="cipher" value={this.props.cipher} /><br></br>
                <button >Save</button>
                <button type="submit"  >Clear</button>



                
            </div>
        )
    }
}
export default OutputBoard