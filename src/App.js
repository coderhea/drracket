import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = ()=>{

  const [ todos, setTodos ] = useState([
    { id: 1, text: 'Node.js', checked: false,},
    { id: 2, text: 'React.js', checked: true,},
    { id: 3, text: 'Java', checked: true,},
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo= {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]
  ); 

  const onRemove = useCallback(
      id=>{
        setTodos(todos.filter(todo => todo.id!==id));
      },[ todos ]
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos.map(todo => 
        todo.id===id ? {...todo, checked: !todo.checked } : todo,
        ));
    }, [todos]  
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