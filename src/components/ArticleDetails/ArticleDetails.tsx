'use client';

import s from './ArticleDetails.module.scss';
import Link from 'next/link';
import ArrowIcon from '@/src/components/UI/Icons/ArrowIcon';
import {IArticle} from '@/src/types/articles';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import EyeIcon from '@/src/components/UI/Icons/EyeIcon';
import {Image} from 'antd';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import errorImage from '../../../public/images/error-image.png';
import PreloaderImage from '@/src/components/UI/PreloaderImage/PrealoderImage';

dayjs.locale('ru');

interface IProps {
  article: IArticle;
  lang: string;
}

export default function ArticleDetails({article, lang}: IProps) {
  const [isShowPreview, setIsShowPreview] = useState(true);
  const t = useTranslations('NewsPage');

  const previewOptions = (isShow: boolean) => {
    if (isShow) return ({mask: <span className={s.previewText}>{t('previewText')}</span>});
    return false;
  };

  return (
    <div className={s.wrapper}>
      <div className={s.innerWrapper}>
        <div className={s.imageWrapper}>
          <Image
            className={s.image}
            src={article.image_big || errorImage.src}
            preview={previewOptions(isShowPreview)}
            alt='Иллюстрация новости'
            placeholder={<PreloaderImage height={400}/>}
            onError={(e) => {
              setIsShowPreview(false);
              if (e.currentTarget.src !== errorImage.src) {
                e.currentTarget.onerror = null;
                e.currentTarget.src = errorImage.src;
              }
            }}
          />
        </div>
        <div className={s.infoWrapper}>
          <div className={s.dateWrapper}>
            <span className={s.date}>
              {lang === 'ru' ? (
                dayjs(article.creation_date).format('DD MMMM YYYY')
              ) : (
                dayjs(article.creation_date).format('DD/MM/YYYY')
              )}
            </span>
            <div className={s.views}>
              <EyeIcon/>
              {article.view_count}
            </div>
          </div>
          <h2>{article.title}</h2>
          <ul className={s.list}>
            <li
              style={{
                background: article.parent_category.color,
                boxShadow: `0 8px 10px 0 ${article.parent_category.color}`
              }}
              className={s.item}
            >
              {article.parent_category.category_title}
            </li>
            <li
              style={{
                background: article.category.color,
                boxShadow: `0 8px 10px 0 ${article.category.color}`
              }}
              className={s.item}
            >
              {article.category.category_title}
            </li>
          </ul>
          <Link className={s.link} href={article.url} target='_blank'>
            {t('originalArticle')}
            <ArrowIcon/>
          </Link>
        </div>
      </div>
    </div>
  );
}
