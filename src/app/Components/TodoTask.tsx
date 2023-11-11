import { ITask } from '../Interfaces';

interface Props {
  task: ITask;
  description: string;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span className="taskname"> {task.taskName}</span>
        <span className="deadline"> {task.deadline}</span>
        <span className="description"> {task.description}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
