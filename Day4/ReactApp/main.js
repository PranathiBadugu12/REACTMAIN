import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import App1 from './App2.jsx'
import App2 from './App1.jsx'
const element = <h1>Hello from element</h1>
function WelcomeProps(props){
    return <h1>welcome from props {props.name} </h1>
}
function Welcome(){
    return <h1>Hello from welcome function</h1>
}
function MyApp(){
    return (
        <div>
            <WelcomeProps name = "Eashan" / > 
        <WelcomeProps name = "Eashan2" /> 
        </div>
    )
}
const element2 = < Welcome / >
    ReactDOM.render( < MyApp / > ,
    document.getElementById("appp")
);
ReactDOM.render( element2 ,
    document.getElementById("appw")
);
ReactDOM.render( element ,
    document.getElementById("appe")
);
ReactDOM.render( < App / > ,
    document.getElementById("app")
);
ReactDOM.render( < App1 / > ,
    document.getElementById("app1")
);
ReactDOM.render( < App2 / > ,
    document.getElementById("app2")
);

