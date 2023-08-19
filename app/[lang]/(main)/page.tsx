import {redirect} from 'next/navigation';
import {DEFAULT_FIRST_PAGE} from '@/src/const/filters';
import Link from 'next/link';

export default async function Page() {
  // redirect(`/news/${DEFAULT_FIRST_PAGE}`);


  // const { t, lang } = useTranslation('content');
  return (
    <>
      <h1>(main)\page</h1>
      <Link
        // href={'/en'}
        locale={'en'}
        href={{
          pathname: `/en/news/1`,
        }}
        passHref
      >
        EN_________|
      </Link>
      <Link
        // href={'/ru'}
            locale={'ru'}
            href={{
              pathname: `/ru/news/1`,
            }}
            passHref
      >RU_________|</Link>
      <Link href={'/ch'} locale={'ch'}>CH_________|</Link>
    </>
  );
}
