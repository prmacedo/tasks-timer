import { useEffect } from "react";
import { timeToSeconds } from "../../common/time";
import { useStopwatch } from "../../context/StopwatchContext";
import { useTasks } from "../../context/TasksContext";
import { Button } from "../Button";
import { Clock } from "./Clock";

import style from './Stopwatch.module.scss';

export function Stopwatch() {
  const { selectedTask, finishTask } = useTasks();
  const { time, setTime } = useStopwatch();

  useEffect(() => {
    setTime(timeToSeconds(selectedTask.time));
  }, [selectedTask]);

  function startStopwatch(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return startStopwatch(count - 1);
      }

      finishTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

      <div className={style.relogioWrapper}>
        <Clock />
      </div>

      <Button onClick={() => startStopwatch(time)}>Começar!</Button>
    </div>
  )
}