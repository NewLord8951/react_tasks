import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');
  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date()
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };
  const activeCount = todos.filter(todo => !todo.completed).length;
  return (
    <div className="blblblbl">
      <div className="todo-app">
        <h1>📝 Список дел</h1>
          <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            className="todo-input"
            placeholder="Что нужно сделать?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
          <button type="submit" className="btn-add">
            Добавить
          </button>
        </form>
        <div className="todo-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Все
          </button>
          <button 
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Активные
          </button>
          <button 
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Выполненные
          </button>
        </div>
        <div className="todo-list">
          {getFilteredTodos().length === 0 ? (
            <p className="empty-message">
              {todos.length === 0 
                ? 'Добавьте первую задачу!' 
                : 'Нет задач для отображения'}
            </p>
          ) : (
            getFilteredTodos().map(todo => (
              <div key={todo.id} className="todo-item">
                <input
                  type="checkbox"
                  className="todo-checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                  {todo.text}
                </span>
                <button 
                  className="btn-delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  x
                </button>
              </div>
            ))
          )}
        </div>
        <div className="todo-footer">
          <span className="todo-count">
            Осталось: <strong>{activeCount}</strong>
          </span>
          {todos.some(todo => todo.completed) && (
            <button className="btn-clear" onClick={clearCompleted}>
              Очистить выполненные
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default TodoList;