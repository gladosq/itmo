import s from './NewsItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import errorImage from '../../../public/images/error-image.png';
import dayjs from 'dayjs';
import {useState} from 'react';

interface IProps {
  article: any;
  lang: string;
}

export default function NewsItem({article, lang}: IProps) {
  const [src, setSrc] = useState(article.image_big || errorImage);

  return (
    <li key={article.id} className={s.item}>
      <Link href={`/news/article/${article.id}`}>
        <div className={s.imageWrapper}>
          <Image
            className={s.image}
            src={src}
            fill
            alt='Изображение новости'
            placeholder='blur'
            blurDataURL={'./../../../public/images/error-image.png'}
            onError={() => setSrc(errorImage)}
          />
        </div>
        <div className={s.infoWrapper}>
          <span>
            {lang === 'ru' ? (
              dayjs(article.creation_date).format('DD MMMM YYYY')
            ) : (
              dayjs(article.creation_date).format('DD/MM/YYYY')
            )}
          </span>
          <p>{article.title}</p>
        </div>
      </Link>
    </li>
  );
}
