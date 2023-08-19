'use client';

import s from './ArticleDetails.module.scss';
// import Image from 'next/image';
import placeholder from '../../../public/images/placeholder.png';
import Link from 'next/link';
import ArrowIcon from '@/src/components/UI/Icons/ArrowIcon';
import {IArticle} from '@/src/types/articles';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import EyeIcon from '@/src/components/UI/Icons/EyeIcon';
import {Image} from 'antd';

dayjs.locale('ru');

interface IProps {
  article: IArticle
}

export default function ArticleDetails({article}: IProps) {

  return (
    <div className={s.wrapper}>
      <div className={s.innerWrapper}>
        <div className={s.imageWrapper}>
          {/*<Image className={s.image} src={article.image_big || placeholder} fill alt='Изображение новости'/>*/}
          <Image
            className={s.image}
            src={article.image_big}
            // placeholder={<PreloaderImage height={400}/>}
            preview={{
              mask: <span className={s.previewText}>Просмотр</span>
            }}
            alt='Иллюстрация новости'
          />
        </div>
        <div className={s.infoWrapper}>
          <div className={s.dateWrapper}>
            <span className={s.date}>{dayjs(article.creation_date).format('DD MMMM YYYY')}</span>
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
                boxShadow: `0 8px 10px 0 ${article.parent_category.color}`}}
              className={s.item}
            >
              {article.parent_category.category_title}
            </li>
            <li
              style={{
                background: article.category.color,
                boxShadow: `0 8px 10px 0 ${article.category.color}`}}
              className={s.item}
            >
              {article.category.category_title}
            </li>
          </ul>
          <Link className={s.link} href={article.url} target='_blank'>
            Смотреть оригинальную статью
            <ArrowIcon/>
          </Link>
        </div>
      </div>
    </div>
  );
}
