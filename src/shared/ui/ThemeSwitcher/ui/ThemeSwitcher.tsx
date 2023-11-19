import s from './ThemeSwitcher.module.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

type ThemeSwitcherProps = {
   className?: string
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
   const {toggleTheme, theme} = useTheme()
   return <button className={classNames(s.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
      {/*<DarkIcon width={40}/>*/}
   </button>
};
