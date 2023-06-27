import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: "",
        id: uniqid(),
        taskNumber: 0,
        editing: false,
      },
      tasks: [],
    };
  }

  removeTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  editTask = (taskId) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) => {
        if (task.id === taskId) {
          // Toggle the editing property
          return { ...task, editing: !task.editing };
        }
        return task;
      });
      return { tasks: updatedTasks };
    });
  };

  updateTaskText = (taskId, newText) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, text: newText };
        }
        return task;
      });
      return { tasks: updatedTasks };
    });
  };

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        taskNumber: this.state.task.taskNumber,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
        taskNumber: this.state.task.taskNumber + 1,
      },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview
          tasks={tasks}
          removeTask={this.removeTask}
          editTask={this.editTask}
          updateTaskText={this.updateTaskText}
        />
      </div>
    );
  }
}

export default App;
