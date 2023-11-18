import {useState} from "react";
import s from './Counter.module.scss'

type Props = {}
export const Counter = (props: Props) => {
   const [count, setCount] = useState(0)

   const handleInc = () => {
      setCount(prevState => prevState + 1)
   }
   const handleReset = () => {
      setCount(0)
   }

   return (
      <div className={s.button}>{count}
         <button onClick={handleInc}>+</button>
         <button onClick={handleReset}>reset</button>
      </div>
   );
};
