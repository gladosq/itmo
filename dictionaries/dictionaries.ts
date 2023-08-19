import 'server-only';

import {IDictionary, ILangs} from './dictionaries-type';

const dictionaries = {
  en: (): Promise<IDictionary> => import('./en.json').then((module) => module.default),
  ru: (): Promise<IDictionary> => import('./ru.json').then((module) => module.default),
  ch: (): Promise<IDictionary> => import('./ch.json').then((module) => module.default),
}

export const getDictionary = async (locale: ILangs) => dictionaries[locale]()
