import { Grid } from '@mantine/core';
import useSWR from 'swr';
import { toMember } from '../mappers/members';
import { Member } from './Member';
import { isValidApiUrl } from '../../../lib/api';
import { fetcher } from '../../../lib/actions';
import { Loading } from '../../Loading/Loading';

type MemberContainerProps = {
  url: string;
};

export const MemberContainer = ({ url }: MemberContainerProps) => {
  // Make sure we use the correct API url
  if (!isValidApiUrl(url)) {
    return null;
  }

  const { data } = useSWR(url, fetcher);

  if (!data) {
    return <Loading />;
  }
  const member = toMember(data);

  if (!member?.name) {
    return null;
  }

  return (
    <Grid.Col md={6}>
      <Member {...member} />
    </Grid.Col>
  );
};
