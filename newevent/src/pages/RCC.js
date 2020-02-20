import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RCC extends Component {

    state = { 
        level:'',
        username: '',
        message: '',
    }
    
    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleAlert = this.handleAlert.bind(this);
    // }

    handleChange=(e) => {
        this.setState({
            [e.target.name] : e.target.value
        }); //just a func, [name] : value
    }

    handleAlert=(e) => {
        alert(this.state.username + ' from '
        + 'level '+ this.state.level + ' says '
        + this.state.message);
        this.setState({
            level: '',
            username: '',
            message: '',
              //clearUp
        });
    }

    handleKeyPress =(e) => {
        if(e.key === 'Enter'){
            this.handleAlert();
        }
    }


    render() {
        return (
            <div padding="1rem" display="flex">
                <h1>Practice Event</h1>
                <h2> by Class Component </h2>
                <input
                    type="text"
                    name="level"
                    placeholder="enter level"
                    value={this.state.level} // state-mesage
                    onChange={this.handleChange} //functionChange               
                />
                <input
                    type="text"
                    name="username"
                    placeholder="enter username"
                    value={this.state.username} // state-mesage
                    onChange={this.handleChange} //functionChange               
                />
                                <input
                    type="text"
                    name="message"
                    placeholder="enter anything"
                    value={this.state.message}// state-mesage
                    onChange={this.handleChange} //functionChange   
                    onKeyPress={this.handleKeyPress}            
                />
                <button onClick={this.handleAlert}>확인</button>
                Go to <Link to="/also">stateless</Link>
            </div>
        );
    }
}

export default RCC;

/* p132 babel
constructor method binding -> transform-class-properties by @babel

constructor(props){
    super(props); // 부모 상속
    this.FUNC = this.FUNC.bind(this);
}; OMIT */

/* p137 onKeyPress 
if(e.key === ' ' ) { this.FORMERFUNC();} */