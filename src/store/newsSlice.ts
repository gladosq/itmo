import {createSlice} from '@reduxjs/toolkit';
import {IArticle} from '@/src/types/articles';
import {DEFAULT_LOCALE} from '@/src/const/filters';

interface INewsProps {
  articles: IArticle[];
  locale: number;
}

const initialState: INewsProps = {
  articles: [{
    id: 0,
    category: {
      category_id: 0,
      category_title: '',
      color: '',
      color_title: ''
    },
    creation_date: '',
    date: '',
    image_big: '',
    image_small: '',
    parent_category: {
      category_id: 0,
      category_title: '',
      color: '',
      color_title: ''
    },
    title: '',
    url: '',
    view_count: 0
  }],
  locale: DEFAULT_LOCALE
};

const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
    setLocale(state, action) {
      state.locale = action.payload;
    }
  },
});

export const {setArticles, setLocale} = newsSlice.actions;
export default newsSlice.reducer;
