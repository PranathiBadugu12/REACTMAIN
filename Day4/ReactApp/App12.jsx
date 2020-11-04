import Axios from 'axios';
import React from 'react'
class App12 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            records: [],
            results:[]
         }
         this.search = this.search.bind(this);
    }
    componentDidMount(){
        const apiurl = ('http://localhost:4000/users');
        Axios.get(apiurl)
            .then((response)=>{
            this.setState({
                records:response.data
                
            })
            console.log(this.state.records)
            })
            .catch(error=>{
                console.log(error);
            })
    
        }
        
    search(){
        
        var resu = [];
        var searchTerm = document.getElementById("key").value.toLowerCase();
        resu = this.state.records.filter(function(record) {
            return record.firstName.toLowerCase().startsWith(searchTerm) ;
          });
        this.setState({results:resu})
       
        
             
    } 
       
    render(){
        return( <div>
        <input type="text" id="key"></input>
        <button onClick={this.search}>click</button>
        <ul>
        {this.state.results.map(rec=><li>{rec.firstName}</li>)}
        </ul>

        </div>)
        
    }
}
export default App12;