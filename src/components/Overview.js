import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  function handleClick() {
    console.log(tasks);
  }

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.text}&nbsp;{task.taskNumber}&nbsp;
            <button onClick={handleClick}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
