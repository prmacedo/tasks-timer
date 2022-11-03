import { useStopwatch } from '../../../context/StopwatchContext';
import style from './Clock.module.scss';

export function Clock() {
  const { time } = useStopwatch();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [ minuteTen, minuteUnit ] = String(minutes).padStart(2, '00');
  const [ secondTen, secondUnit ] = String(seconds).padStart(2, '00');

  return (
    <>
      <span className={style.relogioNumero}>{ minuteTen }</span>
      <span className={style.relogioNumero}>{ minuteUnit }</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{ secondTen }</span>
      <span className={style.relogioNumero}>{ secondUnit }</span>
    </>
  )
}