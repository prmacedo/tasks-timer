import { useState } from "react";
import { useTasks } from "../../context/TasksContext";
import { Button } from "../Button";
import { v4 as uuidv4 } from "uuid";

import { emptyTask, ITask } from "../List/Item"

import style from './Form.module.scss';

export function Form() {
  const [ task, setTask ] = useState<ITask>(emptyTask);
  const { tasks, setTasks } = useTasks();

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const data = {
      ...task,
      selected: false,
      finished: false,
      id: uuidv4()
    } as ITask;

    setTasks([...tasks, data]);

    setTask(emptyTask);
  }

  return (
    <form className={style.novaTarefa} onSubmit={ (evt) => handleSubmit(evt) }>
      <div className={style.inputContainer}>
        <label htmlFor="task">Tarefa</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          value={task?.task}
          onChange={ (evt) => setTask({ ...task, task: evt.target.value} as ITask)}
          required />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          value={task?.time}
          onChange={ (evt) => setTask({ ...task, time: evt.target.value} as ITask)}
          required />
      </div>

      <Button type="submit">Adicionar</Button>
    </form>
  )
}