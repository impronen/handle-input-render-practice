import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  const handleClick = (taskId, action) => {
    if (action === "edit") {
      props.editTask(taskId);
    } else if (action === "delete") {
      props.removeTask(taskId);
    }
  };

  return (
    <ul>
      {tasks.map((task) => {
        if (task.editing) {
          return (
            <li key={task.id}>
              <input
                type="text"
                value={task.text}
                onChange={(e) => props.updateTaskText(task.id, e.target.value)}
              />
              <button onClick={() => handleClick(task.id, "edit")}>
                Resubmit
              </button>
            </li>
          );
        } else {
          return (
            <li key={task.id}>
              {task.text}&nbsp;{task.taskNumber}&nbsp;
              <button onClick={() => handleClick(task.id, "edit")}>Edit</button>
              <button onClick={() => handleClick(task.id, "delete")}>
                Delete
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Overview;

// next just make a bloody loop
