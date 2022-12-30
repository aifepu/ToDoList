import React from "react";
import Item from "./Item";

function List({tasks}) {
    return(
        <ul>
            {tasks.map((task) => (
                <Item key={Math.random()} taskName={task.taskName} />
            ))}
        </ul>
    )
}

export default List;