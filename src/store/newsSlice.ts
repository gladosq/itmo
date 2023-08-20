import {createSlice} from '@reduxjs/toolkit';
import {IArticle} from '@/src/types/articles';

interface INewsProps {
  articles: IArticle[];
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
  }]
};

const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    }
  },
});

export const {setArticles} = newsSlice.actions;
export default newsSlice.reducer;
