import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
`;

const Button = styled.button`
    background: white;
    color: black,
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;

    &:hover {
        background: rgba(255,255,255,0.9);
    }
    
    ${props =>
    props.inverted &&
    css`
        background: none;
        border: 2px solid white;
        color: white;
        &:hover {
            background: white;
            color: black;
        }
    `};

    & + button {
        margin-left: 1rem;
    }
`;



const Say = () => {
    const [ message, setMessage ] = useState('');
    const onClickEnter=() => setMessage('Welcome');
    const onClickLeave=() => setMessage('GoodBye');

    const [ color, setColor ] = useState('gray');

    return (
        <Box color="black">
            <Button onClick={onClickEnter} inverted={true}>Intro</Button>
            <Button onClick={onClickLeave} inverted={true}>Outro</Button>
            <div><h1 style={{ color }}>{message}</h1></div>
            <Button style={{ color: 'red' }} onClick={() => setColor('red')}>Red</Button>
            <Button style={{ color: 'yellow' }} onClick={() => setColor('yellow')}>Green</Button>
            <Button style={{ color: 'green' }} onClick={() => setColor('green')}>Blue</Button>
        </Box>   
    );
};

export default Say;

/* props, state 
return 내부에 html tag 불가능, props 받아야 */
/* p114 useState 
useState(initialState, setterFunction), 객체 비구조화 할당 const in array
color initialState cannot be null */

/* p242 styledComponent
style library는 자동 import 안 되는 것, `` 및 ${props => props.XXX} 표현 숙지 */