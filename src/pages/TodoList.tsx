import { useState } from "react";

type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const [tasks, setTasks] = useState<TodoItem[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = () => {
    const newTodo: TodoItem = {
      // 해당 newTask를 포함한 todo를 만들기 위한 object
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTodo]);
    setNewTask("");
  };

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div>
      <h1>TodoList</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="todo task를 작성해주세요."
          style={{ padding: "10px", marginRight: "10px", width: "300px" }}
        />
        <button onClick={handleAddTask} style={{ padding: "10px" }}>
          Add Task
        </button>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
                style={{ marginRight: "10px" }}
              />
              <div
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  flexGrow: 1,
                }}
              >
                {task.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
