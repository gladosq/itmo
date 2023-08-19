import s from './NewsPreloader.module.scss';

export default function NewsPreloader() {

  return (
    <div className={s.wrapper}>
      <div className={s.listWrapper}>
        <div className={s.preloaderWrapper} style={{height: '372px'}}></div>
        <div className={s.preloaderWrapper} style={{height: '372px'}}></div>
        <div className={s.preloaderWrapper} style={{height: '372px'}}></div>
        <div className={s.preloaderWrapper} style={{height: '372px'}}></div>
        <div className={s.preloaderWrapper} style={{height: '372px'}}></div>
        <div className={s.preloaderWrapper} style={{height: '372px'}}></div>
      </div>
    </div>
  );
}
