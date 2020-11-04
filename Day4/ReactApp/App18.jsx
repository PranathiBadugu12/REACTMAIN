import React from 'react'


class App18 extends React.Component{
    constructor(props){
        super(props)
        this.textInput=React.createRef();
        this.state={
            value:''
        }
    }

    handleSubmit(e){
        // e.preventDefault();
        this.setState({value:this.textInput.current.value})
    }

  render(){
      return(
      <div>
          
          <input type="text" ref={this.textInput}></input>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        
        <h1> {this.state.value}</h1>
      </div>)
  }
}

export default App18





