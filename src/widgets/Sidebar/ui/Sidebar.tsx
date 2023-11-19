import s from './Sidebar.module.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

type SidebarProps = {
   className?: string
}
export const Sidebar = ({className}: SidebarProps) => {
   const [collapsed, setCollapsed] = useState(false)

   const onToggle = () => {
      setCollapsed(prev => !prev)
   }

   return (
      <div className={classNames(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
         <button onClick={onToggle}>TOGGLE</button>
         <div className={s.switchers}>
            <ThemeSwitcher />
         </div>
      </div>
   );
};
