'use client';

import s from './Header.module.scss';
import Logo from '@/src/components/UI/Logo';
import {Select} from 'antd';
import {dataLocale} from '@/src/locale/data';
import {useAppDispatch, useAppSelector} from '@/src/hooks/redux';
import {setLocale} from '@/src/store/newsSlice';
import {DEFAULT_FIRST_PAGE, DEFAULT_LOCALE} from '@/src/const/filters';
import {useParams, useRouter, useSearchParams} from 'next/navigation';
import Link from 'next/link';

export default function Header({lang}: { lang: string }) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const searchParams = useSearchParams();
  const langQuery = searchParams.get('language_id');

  const localeLabels = dataLocale.map((item) => {
      return {
        value: item.value,
        label: <div className={s.label}>{item.flag}{item.label}</div>
      }
    }
  );

  const handleChange = (value: string) => {
    dispatch(setLocale(value));
    const currentLocale = dataLocale.filter((item) => item.value === value);
    router.push(`/${currentLocale[0].route}/news/1`);
  };

  return (
    <div className={s.wrapper}>
      <Link href={'/en'} as={'/en'}>EN_________|</Link>
      <Link href={'/ru'} as={'/ru'}>RU_________|</Link>
      <Link href={'/ch'}>CH_________|</Link>
      <div className={s.innerWrapper}>
        <Link href={`/${lang}/news/1`}>
          <Logo/>
        </Link>
        <Select
          value={langQuery || DEFAULT_LOCALE.toString()}
          defaultValue={langQuery || DEFAULT_LOCALE.toString()}
          style={{width: 100}}
          onChange={handleChange}
          options={localeLabels}
        />
      </div>
    </div>
  );
}
