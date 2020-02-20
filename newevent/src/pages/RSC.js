import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RSC = () => {

    const [ form, setForm ] = useState(
        { level : '',
          username : '',
          message : '',
    });
    const { level, username, message } = form; //don't forget construct
   
    const onChange = e => {
       
        const nextForm = {
            ...form, // previous form
            [ e.target.name ] : e.target.value // overwrite name:value
        };
       
        setForm(nextForm); //set new Form with 'nextForm' 
    };

    const onClick = e => {
        alert(`${username} from level ${level} says ${message}`);
        setForm({
            level:'',
            username:'',
            message:'',
        });
    };

    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick(); //prev FUNC
        }
    };

    
    return (
        <div padding="1rem" display="flex">
                <h1>Practice Event</h1>
                <h2> by stateless function </h2>
                <input
                    type="text"
                    name="level"
                    placeholder="enter level"
                    value={level} // state-mesage
                    onChange={onChange} //functionChange               
                />
                <input
                    type="text"
                    name="username"
                    placeholder="enter username"
                    value={username} // state-mesage
                    onChange={onChange} //functionChange               
                />
                <input
                    type="text"
                    name="message"
                    placeholder="enter anything"
                    value={message}// state-mesage
                    onChange={onChange} //functionChange   
                    onKeyPress={onKeyPress}            
                />
                <button onClick={onClick}>확인</button>
                Go to <Link to="/">class</Link>
            </div>
    );
};

export default RSC;

/* 문자열 백틱 
(`blabla ${} `) */
/* p140 
with useState:Hooks,  {this.handleXXX} => {XXX}, {this.state.YYY} => {YYY} */