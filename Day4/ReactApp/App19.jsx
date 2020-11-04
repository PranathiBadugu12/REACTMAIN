import React from 'react'
class App19 extends React.Component {
    constructor(props) {
      super(props);
  
      this.username = React.createRef();
      this.password = React.createRef();
      this.state = {
        errors: []
      };
    }
  
    handleSubmit(event) {
      const username = this.username.current.value;
      const password = this.password.current.value;
      const errors = this.handleValidation(username, password);
      
      if (errors.length >= 0) {
        this.setState({ errors });
        return;
      }
      
      
    };
  
    handleValidation  (username, password)  {
      const errors = [];
      if (username.length === 0) {
        errors.push("Username cannot be empty");
      }
      
      if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
      }
      if(errors.length == 0){
          errors.push("Welcome "+username+" You have logged in successfully")
      }
      return errors;
    };
  
    render() {
      const { errors } = this.state;
      return (
        <div>
          <h1>React Ref Example</h1>
            
            <div>
              <label>Username:</label>
              <input type="text" ref={this.username} />
            </div>
            <div>
              <label>Password:</label>
              <input type="text" ref={this.password} />
            </div>
            <div>
              <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
            {errors.map(error => <p key={error}>{error}</p>)}
        </div>
      );
    }
  }

  export default App19;


