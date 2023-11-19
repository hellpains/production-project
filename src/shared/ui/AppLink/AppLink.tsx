import s from './AppLink.module.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {Link, LinkProps} from 'react-router-dom';
import {FC} from 'react';

export enum AppLinkTheme {
   PRIMARY = 'primary',
   SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
   className?: string
   theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
   const {className, to, theme = AppLinkTheme.PRIMARY, children, ...rest} = props

   return (
      <Link to={to} className={classNames(s.AppLink, {}, [className, s[theme]])} {...rest}>
         {children}
      </Link>
   );
};

