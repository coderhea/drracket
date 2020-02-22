import React , { useState } from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
   background: violet;
   display:flex;
`;

const Input = styled.input`
    background: black;
    outline: none;
    padding-left : 1rem;
    border: none;
    padding: 0.5xrem;
    font-size: 3 rem;
    line-height: 1.5;
    color: white;
    
    &::placeholder {
        color: #dee2e6;
    }  
    flex: 1; 
`;

const Button = styled.button`
        background: #868e96;
        outline: none;
        border: none;
        padding: 0.5rem;
        color: white;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1.5rem;
        display:flex;
        align-items: center;
`;


const IterList = () => {
    const [ names, setNames ] = useState([
        { id: 1, text: 'elsa'},
        { id: 2, text: 'sven'},
        { id: 3, text: 'anna'},
    ]);
    
    const [ inputText, setInputText ] = useState('');

    const [ nextId, setNextId ] = useState(4);
    //nextId's initialState is 4 and adds up

    const onChange = e => setInputText(e.target.value);

    const onPlus = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1); //add up Id
        setNames(nextNames); //set new names with nextNames
        setInputText(''); //clear up setInputText
    };

    const onMinus = id => { //minusFUNC has parameter Here const & There render
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };
    
    const namesList = names.map( //initialState names
        // name => <li>{name}</li>
          name => (<li key={name.id} onDoubleClick={() => onMinus(name.id)}> 
                    {name.text}
                </li>)); //key id, value text

    return (
        <>
        <Box>
            <Input value={inputText} onChange={onChange} placeholder="where's Olaf?" />
            <Button onClick={onPlus}>Plus</Button>
        </Box> 
        <h3>Double Click to Remove</h3>
        <ul>{namesList}</ul> 
        </>
    );
};

export default IterList;

/* arrow functions
const List1 = [ ] notnull
const List2 = filter(MEMBER => Left CONDITION); 

onDoubleClick = { } @ {()=>FUNC }ok, just FUNC error becuz DoubleClick doesn't get parameter but just click

XX => YY single if not (YY1, YY2)
*/    