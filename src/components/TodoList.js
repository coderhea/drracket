import React from 'react';
import TodoListItem from './TodoListItem';
import styled, { css } from 'styled-components';

const TodoListBox = styled.div`
    min-height:320px;
    max-height:513px;
    overlflow-y:auto;
`;


const TodoList = ({ todos , onRemove, onToggle }) => {
    return (
        <TodoListBox>
            {todos.map( todo => (
                <TodoListItem 
                todo={todo} 
                key={todo.id} 
                onRemove={onRemove}
                onToggle={onToggle}/>
            ))}
        </TodoListBox>
        );
};

export default TodoList;

/* p272 
const TodoList = ({ todos }) => {
    return ( {todos.map(todo => { <todo ={todo} key={todo.id]../>}})})
}
props = todos Array from App.js render into ItemArray by FUNC map
*** key Props need when Array => Component  */

/* p282
const TodoList = ({ todos, onRemove }) => {
    return ... todos.map ( todo={todo} key={todo.id} onRemove={onRemove})
} 
FUNC onRemove is from App.js again 
*/