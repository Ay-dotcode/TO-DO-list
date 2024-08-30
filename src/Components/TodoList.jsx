import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export default function TodoList({ todos, setTodos }) {

    function toggleTodo(id, completed) {
        setTodos((t) =>
            t.map((todo) => {
                if (todo.id === id) return { ...todo, completed };
                return todo;
            })
        );
    }
    function deleteTodo(id) {
        return () => {
            setTodos((t) => t.filter((todo) => todo.id !== id));
        };
    }

    return (
        <ul className="list">
            {todos.length === 0 && <li>No Todos</li>}
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    setTodos: PropTypes.func.isRequired,
};
