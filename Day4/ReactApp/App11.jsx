import Axios from 'axios';
import React from 'react'
class App11 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            records: [],
            records1:[],
            records2:[]
         }
    }
    componentDidMount(){
        const apiurl = ('https://api.github.com/users/hacktivist123/repos');
        // fetch(apiurl)
        // .then((response)=>response.json())
        // .then((data)=>console.log(data));
    // Axios.get(apiurl)
    //     .then((response)=>{
    //     this.setState({
    //         records:response.data
            
    //     })
    //     console.log(this.state.records)
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    const urlone = Axios.get('http://jsonplaceholder.typicode.com/users/');
        const urltwo =  Axios.get('https://api.github.com/users/hacktivist123/repos');
        const myUrl=Axios.get('http://localhost:4000/users');
    Axios.all([urlone,urltwo,myUrl]).then(
        Axios.spread((...responses)=>{
            this.setState({
                records:(responses[0].data),
                records1:(responses[1].data),
                records2:(responses[2].data)
        })
            }
            )
    )
        }
    render(){
        return( <div>First<ul>
            {this.state.records.map(rec=><li>{rec.name}</li>)}
        </ul>
        Second<ul>
        {this.state.records1.map(rec=><li>{rec.name}</li>)}
        </ul>
        MyUrl<ul>
        {this.state.records2.map(rec=><li>{rec.firstName}</li>)}
        </ul>
        </div>)
        
    }
}
export default App11;