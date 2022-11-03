import { useTasks } from "../../context/TasksContext";
import { Item } from "./Item";

import style from './List.module.scss';

export function List() {
  const { tasks } = useTasks();

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>

      <ul>
      {
        tasks.map((task, index) => (
          <Item
            key={ index }
            {...task}
          />
        ))
      }
      </ul>
    </aside>
  )
}