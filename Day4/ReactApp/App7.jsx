import React from "react"
class App7 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          title:"React state example"
        };
      }
      toggleTitle(){
          if(this.state.title === " ")
          this.setState({title:"React state example"});
          else
          this.setState({title:" "});
      }
    
     
      render() {
        return (
    
       <div>
           <input type="checkbox" onClick={() => this.toggleTitle()} defaultChecked/>
           <label htmlFor="showTitle">showTitle</label>
            <h1>{this.state.title}</h1>
      </div>
        );
      }
}

export default App7;
