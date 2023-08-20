import s from './NewsPreloader.module.scss';
import {DEFAULT_PRELOADER_ELEMENTS} from '@/src/const/common';

export default function NewsPreloader() {
  return (
    <div className={s.wrapper}>
      <div className={s.listWrapper}>
        {Array(DEFAULT_PRELOADER_ELEMENTS).fill(<div className={s.preloaderWrapper}></div>)}
      </div>
    </div>
  );
}
