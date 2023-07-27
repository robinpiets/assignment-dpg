import { Text, Button, Paper, Title, Grid, Container } from '@mantine/core';
import useSWR from 'swr';
import Link from 'next/link';
import { GAME_OF_THRONES_API } from '../../lib/api';
import { fetcher } from '../../lib/actions';
import { toHouses } from './mappers/houses';
import { Loading } from '../Loading/Loading';
import { sanitizeUrl } from '../../lib/utils/sanitize-url';

export const Houses = () => {
  const { data } = useSWR(GAME_OF_THRONES_API.houses, fetcher);

  if (!data) {
    <Paper radius="md" withBorder p="lg">
      <Text ta="center" fz="lg" weight={500} mt="md">
        <Loading />
      </Text>
    </Paper>;
  }

  const houses = toHouses(data);

  return (
    <>
      <Title align="center" mb="lg" mt="sm">
        Houses
      </Title>
      <Container my="md">
        <Grid m="lg">
          {houses.map(({ coatOfArms, id, name, region, words }) => (
            <Grid.Col md={6} key={name}>
              <Paper radius="md" withBorder p="lg">
                <Text ta="center" fz="lg" weight={500} mt="md">
                  {name}
                </Text>
                {coatOfArms ? (
                  <Text ta="center" c="dimmed" fz="sm">
                    {coatOfArms}
                  </Text>
                ) : null}
                {region ? (
                  <Text ta="center" c="dimmed" fz="sm">
                    {region}
                  </Text>
                ) : null}
                {words ? (
                  <Text ta="center" c="dimmed" fz="sm">
                    {words}
                  </Text>
                ) : null}

                <Link href={sanitizeUrl(`house/${id}/${name}/`)} passHref>
                  <Paper radius="sm" withBorder p="xs" mt="lg">
                    <Text ta="center" c="black" fz="sm" weight={500} underline>
                      Enter house
                    </Text>
                  </Paper>
                </Link>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};
