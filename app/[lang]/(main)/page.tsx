import {redirect} from 'next/navigation';
import {DEFAULT_FIRST_PAGE} from '@/src/const/filters';

export default async function Page() {
  redirect(`/news/${DEFAULT_FIRST_PAGE}`);
  return <></>;
}
