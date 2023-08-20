import Subtitle from '@/src/components/Subtitle/Subtitle';
import NewsList from '@/src/components/NewsList/NewsList';
import {API_VERSION} from '@/src/const/api-versions';
import {objToQueryString} from '@/src/utils/utils';
import {INewsParams} from '@/src/api/news';
import {DEFAULT_PER_PAGE} from '@/src/const/filters';
import {dataLocale} from '@/src/locale/data';
import NewsPreloader from '@/src/components/UI/NewsPreloader/NewsPreloader';

async function getData(params: INewsParams) {
  const res = await fetch(
    `https://news.itmo.ru/api/news/list/?ver=${API_VERSION}&${objToQueryString(params)}`
  );

  if (!res.ok) {
    throw new Error('Ошибка загрузки данных');
  }

  return res.json();
}

export default async function Page(props: {params: {lang: string, pageNumber: number}}) {
  const currentLocale = dataLocale.filter((item) => item.route === props.params.lang);
  const pageNumber = props.params.pageNumber;
  const queryParams = {
    language_id: Number(currentLocale[0].value),
    page: pageNumber,
    per_page: DEFAULT_PER_PAGE
  };

  const newsData = await getData(queryParams);

  return (
    <>
      {/*<NewsPreloader/>*/}
      <Subtitle/>
      <NewsList
        newsData={newsData}
        page={pageNumber}
        lang={props.params.lang}
      />
    </>
  )
}
