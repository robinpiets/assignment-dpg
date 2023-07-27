import { Text, Paper, Title, Container } from '@mantine/core';
import useSWR from 'swr';
import { GAME_OF_THRONES_API } from '../../../lib/api';
import { fetcher } from '../../../lib/actions';
import { toHouseDetail } from '../mappers/houseDetail';
import { Error } from '../../Error/Error';
import { Members } from '../Members/Members';
import { Loading } from '../../Loading/Loading';

type HouseDetailProps = {
  id: string;
};

export function HouseDetail({ id }: HouseDetailProps) {
  const { data, error } = useSWR(`${GAME_OF_THRONES_API.houses}/${id}`, fetcher);
  const houseDetail = toHouseDetail(data);

  if (!data || error || !houseDetail) {
    return (
      <Paper radius="md" withBorder p="lg">
        <Text ta="center" fz="lg" weight={500} mt="md">
          {!data ? <Loading /> : <Error />}
        </Text>
      </Paper>
    );
  }

  const { coatOfArms, name, region, memberUrls, words } = houseDetail;

  return (
    <Container my="md">
      <Title align="center" mb="lg" mt="sm">
        House details
      </Title>
      <Paper radius="md" withBorder p="lg">
        <Text ta="center" fz="lg" weight={500} mt="md">
          {name}
        </Text>
        {coatOfArms ? (
          <Text ta="center" c="dimmed" fz="sm" italic>
            {coatOfArms}
          </Text>
        ) : null}
        {region ? (
          <Text ta="center" c="dimmed" fz="sm">
            From: {region}
          </Text>
        ) : null}
        {words ? (
          <Text ta="center" c="dimmed" fz="sm">
            {words}
          </Text>
        ) : null}

        <Members memberUrls={memberUrls} />
      </Paper>
    </Container>
  );
}
