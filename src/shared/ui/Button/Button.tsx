import s from './Button.module.scss'
import {classNames} from 'shared/lib/classNames/classNames';

type ButtonProps = {
   className?: string
}
export const Button = ({className}: ButtonProps) => {
   return (
      <div className={classNames(s.Button, {}, [className])}>

      </div>
   );
};
