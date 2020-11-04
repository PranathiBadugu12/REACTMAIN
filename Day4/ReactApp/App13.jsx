import React,{ Component  } from "react";
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import htmlContent from './Contact.html'
import css from './file.css'
import {stockData} from './data.js'
class App13 extends Component {
    constructor(props) {
        super(props);
        const myconf = require('./myConf.json5');
        console.log(myconf.default.env)
      }
    render() {
    
      return (
      <Router>
          <div>
            <nav>
            <ul class="topnav">
              <li><Link to={'/'} > Home </Link></li>
              <li><Link to={'/contact'} >Contact</Link></li>
              <li><Link to={'/about'} >About</Link></li>
              <li><Link to={'/signin'} >SignIn</Link></li>
              <li><Link to={'/signup'} >Signup</Link></li>
            </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
   class Contact extends Component {
        render() {
          return (
              <div>
                <div dangerouslySetInnerHTML={{__html:htmlContent}}></div>
              </div>
          );
        }
      }
class SignUp extends Component {
        render() {
          return (
                  <div id="login-box">
        <div class="left">
          <h1>Sign up</h1>
          
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="password2" placeholder="Retype password" />
          
          <input type="submit" name="signup_submit" value="Sign me up" />
        </div>
        
      </div>
             
          );
        }
      }
class SignIn extends Component {
        render() {
          return (
              <div id="signin-box" class="left">
                <h1>Sign In</h1>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" name="signin_submit" value="Sign In" />
                </div>
        

          );
        }
      }

class Home extends Component {
        render() {
          return (
              <div>
                <h2>Home</h2>
              </div>
          );
        }
      }
    

    
    class About extends Component {
            render() {
                   return (
                          <div>
                           {stockData.map((data,key)=>{
                    return(
                    <div key={key}>
                        {data.company} {data.stockPrice} {data.stockPrice}
        
                    </div>)
                })}
                          </div>
                      );
                    }
            }
          
        

       
            
            



export default App13;

