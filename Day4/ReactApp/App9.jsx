import React from 'react';

class App9 extends React.Component{
    constructor(props){
        super(props)
        this.hdClk=this.handleClick.bind(this)
    }

    handleClick(){
        console.log("Im executed")
    }

    render(){
        return(<div>
            
            <button onClick={()=>this.handleClick()}>CLICK ME </button>
            <button onClick={this.hdClk}>CLICK ME </button>
            <button onClick={this.handleClick.bind(this)}>CLICK ME </button>

        </div>)
    }

}

export default App9;
