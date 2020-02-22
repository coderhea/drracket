import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = ({ onInsert }) => {
    const  [ value, setValue ] = useState('');

    const onChange = useCallback( e => {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback( e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
            placeholder="What To Do"
            value={value}
            onChange={onChange}/>
            <button type="submit"><MdAdd /></button>
        </form>
    );
};

export default TodoInsert;

/*p208 useCallback 
rendering optimize : useCallback(FUNC, ARRAY);
const onChange = useCallback(FUNC,[]); // only once
const onInsert = useCallback(FUNC, ARRAY); // change or add then 
*/
/* p274 onChange FUNC reusable by useCallback Hook */ 
/* p278 useCallback : setValue('') cleanup + e.preventDefault() : stop rerender*/