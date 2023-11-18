import React from 'react';
import s from './Navbar.module.scss'
import {Link} from "react-router-dom";
import {classNames} from 'shared/lib/classNames/classNames';

type NavbarProps = {
   className?: string
}
export const Navbar = ({className}: NavbarProps) => {
   return (
      <div className={classNames(s.Navbar, {}, [className])}>
         <Link to="/">Main</Link>-------------
         <Link to="/about">About</Link>
      </div>
   );
};