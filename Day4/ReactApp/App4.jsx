import React from "react"
class App4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Pranathi",
            id:"100",
            sal:"10000"
        };
    }
    render(){
        return(
            <div> 
                {this.state.name} {this.state.id} {this.state.sal}
            </div>
            
        );
    }
}

export default App4;