import {objToQueryString} from '@/src/utils/utils';

export interface INewsParams {
  language_id?: number;
  per_page?: number;
  lead?: string;
  page?: number;
}

export interface INewsResponse {
  category: number;
  last_page: number;
  news: IArticle[];
  page: number;
  per_page: number;
  total: number;
}

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {API_VERSION} from '@/src/const/api-versions';
import {IArticle} from '@/src/types/articles';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://news.itmo.ru`
  }),
  endpoints: (build) => ({
    getNews: build.query<INewsResponse, INewsParams>({
      query: (params) => ({
        url: `/api/news/list/?ver=${API_VERSION}&${objToQueryString(params)}`,
        method: 'GET'
      }),
    }),
  }),
});

export const {useGetNewsQuery} = newsApi;
