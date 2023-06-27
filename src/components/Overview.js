import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  const handleClick = (taskId) => {
    props.removeTask(taskId);
  };

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.text}&nbsp;{task.taskNumber}&nbsp;
            <button onClick={() => handleClick(task.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;

// next just make a bloody loop
