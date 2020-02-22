import React, { useReducer, useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos(){
  const array =[];
  for (let i =1; i<=2500; i++){
    array.push({
      id: i,
      text: `study ${i}`,
      checked:false,
    });
  }
  return array;
}

function todoReducer(todos, action){
  switch (action.type){
    case 'INSERT':
      //
      return todos.concat(action.todo);
    case 'REMOVE':
      //
      return todos.filter(todo => todo.id!==action.id);
    case 'TOGGLE':
      //
      return todos.map(todo=>
        todo.id === action.id? {...todo, checked : !todo.checked} : todo);
    default:
      return todos;
  }
}

const App = ()=>{

  const [ todos, dispatch ] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo= {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch( { type: 'INSERT' , todo });
      // setTodos(todos.concat(todo)); when useEffect but now useReducer
      nextId.current += 1;
    }, []); 

  const onRemove = useCallback( 
      id => {
      dispatch( { type: 'REMOVE' , id});
      //  setTodos(todos.filter(todo => todo.id!==id));
      },[]
  );

  const onToggle = useCallback(
      id => {
      dispatch( { type: 'TOGGLE' , id});
      // setTodos(todos.map(todo => 
      //   todo.id===id ? {...todo, checked: !todo.checked } : todo,
      //   ));
    }, []  
  );

  return ( 
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>   
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>);
};

export default App;

/* p271 : todos Array constructed by useState @ App.js
goes to props at TodoList as <TodoList todos={todos}/> */
/* p278 : onInsert FUNC constructed by useCallback @App.js 
goes to props at TodoInsert as 
const TodoInsert = ({ onInsert }) => {
    const  [ value, setValue ] = useState('');
    that is, push Value into FUNC onInsert then Initialize
    */

/* setList(List.concat(member)); 
   nextId.current +=1;
}, List */

/* p284 map & 불변성 
todo.id !== id from 삼항연산자, just todos, initialstate, no need upadate
*/

/*p301 useReducer : state logics outside Component 
useReducer(ReducerName, initialState) but here undefined 2nd, createBulkTodos 3rd 
only first render then call createBulkTodos */