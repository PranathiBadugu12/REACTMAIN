import React from 'react';

class App10 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : " "
         }
        
        this.onSubmit = this.onSubmit.bind(this);
      }
    onSubmit(e) {
        var name=document.getElementById("title").value
        this.setState({name:name});
    }
    
  
     componentDidUpdate(prevProps, prevState) {
        document.getElementById("res").innerHTML = "from " + prevState.name + " to " + this.state.name ;
     }

    render(){
        return (
            <div>
                
                <input type="text"  id="title" /><br></br>
                <button type="button" onClick={this.onSubmit} className="btn">Save</button>
                <p id="res"> </p>
            </div>
            
        );
    }
    }

export default App10;
