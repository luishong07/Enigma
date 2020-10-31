import React, { Component } from 'react'
import './LampBoard.css';


class LampBoard extends Component{

    
    
    render(){
        return(
            <div >
                    <div className="keyboard">
                    
                    <div className="row">
                        <span className="key letter" id="Q">
                            Q
                        </span>

                        <span className="key letter" id="W">
                            W
                        </span>

                        <span className="key letter" id="E">
                            E
                        </span>

                        <span className="key letter" id="R">
                            R
                        </span>

                        <span className="key letter" id="T">
                            T
                        </span>
                        <span className="key letter" id="Y">
                            Y
                        </span>

                        <span className="key letter" id="U">
                            U
                        </span>

                        <span className="key letter" id="I">
                            I
                        </span>

                        <span className="key letter" id="O">
                            O
                        </span>

                        <span className="key letter" id="P">
                            P
                        </span>
                    </div>
                    
                
                   
                            
                    <div className="row">
                        <span className="key letter" id="A">
                            A
                        </span>

                        <span className="key letter" id="S">
                            S
                        </span>

                        <span className="key letter" id="D">
                            D
                        </span>

                        <span className="key letter" id="F">
                            F
                        </span>

                        <span className="key letter" id="G">
                            G
                        </span>

                        <span className="key letter" id="H">
                            H
                        </span>

                        <span className="key letter" id="J">
                            J
                        </span>

                        <span className="key letter" id="K">
                            K
                        </span>

                        <span className="key letter" id="L">
                            L
                        </span>
                    </div>

                    <div className="row">
                        <span className="key letter" id="Z">
                            Z
                        </span>

                        <span className="key letter" id="X">
                            X
                        </span>

                        <span className="key letter" id="C">
                            C
                        </span>

                        <span className="key letter" id="V">
                            V
                        </span>

                        <span className="key letter" id="B">
                            B
                        </span>

                        <span className="key letter" id="N">
                            N
                        </span>

                        <span className="key letter" id="M">
                            M
                        </span>
                    </div>

                    
                    </div>
            </div> 


        )
    }
}

export default LampBoard