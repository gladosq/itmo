'use client';

import s from './NewsList.module.scss';
import {Pagination} from 'antd';
import {INewsResponse} from '@/src/api/news';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {useEffect, useState} from 'react';
import {DEFAULT_PER_PAGE} from '@/src/const/filters';
import {useAppDispatch, useAppSelector} from '@/src/hooks/redux';
import {setArticles} from '@/src/store/newsSlice';
import {useRouter} from 'next/navigation';
import NewsItem from '@/src/components/NewsItem/NewsItem';

dayjs.locale('ru');

interface IProps {
  page: number;
  newsData: INewsResponse,
  lang: string;
}

export default function NewsList({page, newsData, lang}: IProps) {
  /*--- Функционал на получение новостей для клиентской компоненты.
  Закомментировано в рамках ТЗ.

  const [currentPage, setCurrentPage] = useState(page);
  const [skip, setSkip] = useState(true);
  const currentLocale = useAppSelector((store) => store.newsData.locale-t);

  const {data, isSuccess, isLoading, isFetching} = useGetNewsQuery(
    {page: currentPage, per_page: DEFAULT_PER_PAGE, language_id: currentLocale},
    {skip}
  ); ---*/

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(setArticles(newsData.news));
  }, [newsData]);

  const allArticles = useAppSelector((store) => store.newsData.articles);

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {allArticles?.map((item) => {
          return (
            <NewsItem key={item.id} article={item} lang={lang}/>
          )
        })}
      </ul>
      <div className={s.paginationWrapper}>
        <Pagination
          current={Number(page)}
          onChange={(e) => router.push(`/${lang}/news/${e}`)}
          total={newsData.total}
          showSizeChanger={false}
          pageSize={DEFAULT_PER_PAGE}
          hideOnSinglePage
        />
      </div>
    </div>
  );
}
