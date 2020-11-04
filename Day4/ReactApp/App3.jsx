import React from "react"
class App3 extends React.Component{
    render(){
        return(
            <div> 
                {this.props.empId}   
                <div> {this.props.ename}  </div>
            </div>
            
        );
    }
}

export default App3;