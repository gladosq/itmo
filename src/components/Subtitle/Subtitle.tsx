'use client';

import s from './Subtitle.module.scss';
import {useTranslations} from 'next-intl';

export default function Subtitle() {
  const t = useTranslations('NewsPage');

  return (
    <h2 className={s.subtitle}>{t('title')}</h2>
  );
}
