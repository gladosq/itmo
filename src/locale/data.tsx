import RusIcon from '@/src/components/UI/Icons/RusIcon';
import EngIcon from '@/src/components/UI/Icons/EngIcon';
import ChinaIcon from '@/src/components/UI/Icons/ChinaIcon';
import React from 'react';

interface IDataLocale {
  label: string;
  value: string;
  route: string;
  flag: React.ReactNode
}

export const dataLocale: IDataLocale[] = [
  {
    label: 'Рус',
    value: '1',
    route: 'ru',
    flag: RusIcon()
  },
  {
    label: 'Eng',
    value: '2',
    route: 'en',
    flag: EngIcon()
  },
  {
    label: '中文',
    value: '3',
    route: 'ch',
    flag: ChinaIcon()
  }
];
