import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Message: "",email:"" };
  }
 
  render() {
    return (
      <div style={{ marginTop: "10%", textAlign: "center" }}>
     Email:   <input
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        /><br/>
           Message <textarea
          value={this.state.Message}
          onChange={(e) => this.setState({ Message: e.target.value })}
        />
        <button onClick={()=>{alert("email envoyé par:"+this.state.email);
    this.setState({email:"",Message:""})
    
    }}>Envoyer</button>
      </div>
    );
  }
}

export default Form;