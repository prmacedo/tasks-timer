import { useTasks } from '../../../context/TasksContext';
import style from './Item.module.scss';

export interface ITask {
  time: string;
  task: string;
  selected: boolean;
  finished: boolean;
  id: string;
}

export const emptyTask = {
  time: '',
  task: '',
  selected: false,
  finished: false,
  id: ''
} as ITask;

export function Item({ time, task, selected, finished, id }: ITask) {
  const { setSelectedTask } = useTasks();

  return (
    <li className={`${style.item} ${selected ? style.itemSelecionado : ''} ${ finished ? style.itemCompletado : '' }`} onClick={() => !finished && setSelectedTask({ time, task, selected, finished, id })}>
      <h3>{ task }</h3>
      <span>{ time }</span>
      {
        finished &&
        <span className={style.concluido}></span>
      }
    </li>
  )
}