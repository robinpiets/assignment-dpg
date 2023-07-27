import { useRouter } from 'next/router';
import { HouseDetail } from '../../components/Houses/Detail/HouseDetail';
import { Error } from '../../components/Error/Error';
import { BaseLayout } from '../../components/BaseLayout/BaseLayout';

export default function Page() {
  const router = useRouter();

  const { slug } = router.query;

  if (!Array.isArray(slug)) {
    return <Error />;
  }

  const [id] = slug;

  return (
    <BaseLayout>
      <HouseDetail id={id} />
    </BaseLayout>
  );
}
