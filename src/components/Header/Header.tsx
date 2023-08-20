'use client';

import s from './Header.module.scss';
import Logo from '@/src/components/UI/Logo';
import {Select} from 'antd';
import {dataLocale} from '@/src/locale/data';
import {DEFAULT_LOCALE} from '@/src/const/filters';
import {useRouter} from 'next/navigation';
import Link from 'next-intl/link';

export default function Header({lang}: { lang: string }) {
  const router = useRouter();

  const currentPageLocale = dataLocale.filter((item) => item.route === lang);
  const localeLabels = dataLocale.map((item) => {
      return {
        value: item.value,
        label: <div className={s.label}>{item.flag}{item.label}</div>
      }
    }
  );

  const handleChange = (value: string) => {
    const currentLocale = dataLocale.filter((item) => item.value === value);
    router.push(`/${currentLocale[0].route}/news/1`, {
      forceOptimisticNavigation: true
    });
  };

  return (
    <div className={s.wrapper}>
      <div className={s.innerWrapper}>
        <Link href={'/'} locale={lang}>
          <Logo/>
        </Link>
        <Select
          value={currentPageLocale[0].value || DEFAULT_LOCALE.toString()}
          defaultValue={DEFAULT_LOCALE.toString()}
          style={{width: 100}}
          onChange={handleChange}
          options={localeLabels}
        />
      </div>
    </div>
  );
}
