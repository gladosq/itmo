interface ICategory {
  category_id: number;
  category_title: string;
  color: string;
  color_title: string;
}

interface IParentCategory {
  category_id: number;
  category_title: string;
  color: string;
  color_title: string;
}

export interface IArticle {
  id: number;
  category: ICategory;
  creation_date: string;
  date: string;
  image_big: string;
  image_small: string;
  parent_category: IParentCategory;
  title: string;
  url: string;
  view_count: number;
}
