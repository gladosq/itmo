import s from './Custom500Block.module.scss';
import Link from 'next/link';

export default function Custom500Block() {
  return (
    <div className={s.wrapper}>
      <div className={s.innerWrapper}>
        <h2>Ошибка 500</h2>
        <h3>Что-то пошло не так</h3>
        <Link className={s.link} href={''}>На главную</Link>
      </div>
    </div>
  );
};
