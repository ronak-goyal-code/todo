import React, { use, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
    const todos = useSelector((state) => state.todos)
    const [selectedFilter, setSelectedFilter] = useState('all')
    const filteredTodos = todos.filter(todo => {
        if (selectedFilter === 'active') {
            return !todo.completed
        } else if (selectedFilter === 'completed') {
            return todo.completed
        }
        return true
    })

    
    return (
        <div className="todo-list">
            <div className="filter">
                <button className="filter-btn" onClick={() => setSelectedFilter('all')}>All</button>
                <button className="filter-btn" onClick={() => setSelectedFilter('active')}>Active</button>
                <button className="filter-btn" onClick={() => setSelectedFilter('completed')}>Completed</button>
            </div>
            {filteredTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList