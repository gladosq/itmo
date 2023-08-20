'use client';

import s from './Custom404Block.module.scss';
import Link from 'next/link';

export default function Custom404Block() {
  return (
    <div className={s.wrapper}>
      <div className={s.innerWrapper}>
        <h2>Ошибка 404</h2>
        <h3>Такой страницы не существует</h3>
        <Link className={s.link} href={''}>На главную</Link>
      </div>
    </div>
  );
};
