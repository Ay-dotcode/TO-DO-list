import PropTypes from "prop-types";
import { useState } from "react";

export function NewTodoForm({ setTodos }) {

    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem.trim() !== "")
            setTodos(t => [...t, {
                id: crypto.randomUUID(),
                title: newItem,
                completed: false
            }
            ]);
        setNewItem("");
    }
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} type="text" id="item"
                    onChange={(e) => setNewItem(e.target.value)} />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}

NewTodoForm.propTypes = {
    setTodos: PropTypes.func.isRequired
};