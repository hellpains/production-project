import { Loader } from 'widgets/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './PageLoader.module.scss';

interface PageLoaderProps {
   className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(s.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
