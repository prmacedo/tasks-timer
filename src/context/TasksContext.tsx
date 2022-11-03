import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { emptyTask, ITask } from '../components/List/Item';

interface TasksContextProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  selectedTask: ITask;
  setSelectedTask: React.Dispatch<React.SetStateAction<ITask>>;
  finishTask: () => void;
}

interface TasksContextProviderProps {
  children: ReactNode;
}

const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  setTasks: () => {},
  selectedTask: emptyTask,
  setSelectedTask: () => {},
  finishTask: () => {}
});


export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Array <ITask>>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>(emptyTask);

  useEffect(() => {
    const updatedTasks = tasks.map(task => (
      {
        ...task,
        selected: task.id === selectedTask.id
      }
    ));

    setTasks(updatedTasks);
  }, [selectedTask]);


  function finishTask() {
    const updatedTasks = tasks.map(task => (
      {
        ...task,
        finished: task.id === selectedTask.id,
        selected: false
      }
    ));

    setSelectedTask(emptyTask);
    setTasks(updatedTasks);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        selectedTask,
        setSelectedTask,
        finishTask
      }}
    >
      { children }
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  const { tasks, setTasks, selectedTask, setSelectedTask, finishTask } = context;
  return { tasks, setTasks, selectedTask, setSelectedTask, finishTask };
}