
import React from "react"

function TodoItems(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.info.num}. {props.info.text}</p>
        </div>
    )
}

export default TodoItems