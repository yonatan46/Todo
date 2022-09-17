import React from "react";


const Form = ({ setInputText,inputText,setTodos,todos, setStatus,filterHandler }) => {
    // const inputTextHandler = (e) => {
    //     setInputText(e.target.value);

    // }
    // no idea why this is not wokring
    const edfwwdb = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed : false, id : Math.random() * 1000}
        ]);
        setInputText("")
    }
    const statusHanler = (e) => {
        setStatus(e.target.value); 
    }
    return (
    <form >
        <input value={inputText} onChange={edfwwdb} type="text" className="todo-input" />
        <button onChange={filterHandler} onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button> 
        <div className="select">
            <select onChange={filterHandler} onClick={statusHanler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    );
}

export default Form;