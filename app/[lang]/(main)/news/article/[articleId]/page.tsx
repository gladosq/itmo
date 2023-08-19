'use client';

import ArticleDetails from '@/src/components/ArticleDetails/ArticleDetails';
import Link from 'next/link';
import ArrowIcon from '@/src/components/UI/Icons/ArrowIcon';
import {useAppSelector} from '@/src/hooks/redux';
import {useRouter} from 'next/navigation';

export default function Page(props: any) {
  const articleId = props.params.articleId;

  const allArticles = useAppSelector((store) => store.newsData.articles);
  const currentArticle = allArticles.slice().filter((item) => item.id === Number(articleId));

  const router = useRouter();

  return (
    <>
      <div className='details-layout'>
        <button onClick={() => router.back()}>
          <ArrowIcon/>
          Вернуться к списку
        </button>
      </div>
      <ArticleDetails
        article={currentArticle[0]}
      />
    </>
  );
}
