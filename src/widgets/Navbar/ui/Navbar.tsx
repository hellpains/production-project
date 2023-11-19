import React from 'react';
import s from './Navbar.module.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

type NavbarProps = {
   className?: string
}
export const Navbar = ({className}: NavbarProps) => {
   return (
      <div className={classNames(s.Navbar, {}, [className])}>
         <div className={s.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={s.mainLink}>Main</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={s.aboutLink}>About</AppLink>
         </div>
      </div>
   );
};