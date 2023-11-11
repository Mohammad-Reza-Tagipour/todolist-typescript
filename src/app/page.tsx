'use client';

import { useState, ChangeEvent } from 'react';
import { ITask } from './Interfaces';
import TodoTask from './Components/TodoTask';

const Home: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);

  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'task') {
      setTask(value);
    } else if (name === 'description') {
      setDescription(value);
    } else {
      setDeadline(Number(value));
    }
  };

  const addTask = () => {
    if (!task) {
      alert('Please enter a task');
      return;
    }
    if (!deadline || deadline < 0) {
      alert('Please choose a Deadline');
      return;
    }
    if (deadline < 0) {
      alert('Deadline must be a positive number');
      return;
    }
    const newTask: ITask = {
      taskName: task,
      deadline: deadline,
      description: description,
    };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
    setDescription('');
  };

  const completeTask = (taskNameToDelete: string) => {
    setTodoList(
      todoList.filter((task: any) => task.taskName !== taskNameToDelete)
    );
  };

  return (
    <main>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task Name"
            name="task"
            value={task}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Task Description"
            name="description"
            value={description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="Deadline..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
            min={0}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, index: number) => (
          <TodoTask
            key={task.taskName}
            task={task}
            description={description}
            // index={index}
            completeTask={completeTask}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
