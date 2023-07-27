import { Text, Paper, Title, Grid, Container, Button } from '@mantine/core';
import useSWRInfinite from 'swr/infinite';
import Link from 'next/link';
import { GAME_OF_THRONES_API } from '../../lib/api';
import { fetcher } from '../../lib/actions';
import { toHouses } from './mappers/houses';
import { Loading } from '../Loading/Loading';
import { sanitizeUrl } from '../../lib/utils/sanitize-url';
import { FilterMenu } from './FilterMenu';
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { IconRotate } from '@tabler/icons-react';

export const Houses = () => {
  const [hasDiedOut, setHasDiedOut] = useState(false);
  const [hasTitles, setHasTitles] = useState(false);
  const [hasSeats, setHasSeats] = useState(false);

  const queryParams = useMemo(() => {
    // Combine all query params from the filters

    // Out of scope: Add query params to the current page so a page reload applies the filters
    return [
      `${hasDiedOut ? 'hasDiedOut=true' : ''}`,
      `${hasTitles ? 'hasTitles=true' : ''}`,
      `${hasSeats ? 'hasSeats=true' : ''}`,
    ]
      .filter((value) => value)
      .join('&');
  }, [hasDiedOut, hasTitles, hasSeats]);

  const getKey = useCallback(
    (pageIndex: number, previousPageData: any) => {
      if (previousPageData && !previousPageData.length) {
        // Out of scope: display message that the end is reached
        return null;
      }
      return `${GAME_OF_THRONES_API.houses}?page=${pageIndex}&pageSize=50&${queryParams}`; // SWR key
    },
    [queryParams]
  );

  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  useEffect(() => {
    // The API starts with page number 1 (instead of 0)
    setSize(1);
  }, []);

  if (!data) {
    return (
      <Paper radius="md" withBorder p="lg">
        <Text ta="center" fz="lg" weight={500} mt="md">
          <Loading />
        </Text>
      </Paper>
    );
  }

  const filterMenuProps = {
    hasDiedOut,
    setHasDiedOut,
    hasTitles,
    setHasTitles,
    hasSeats,
    setHasSeats,
  };

  // Calculate the total number of houses on the page
  let totalHouses = 0;
  for (let i = 0; i < data.length; i++) {
    totalHouses += data[i].length;
  }

  return (
    <Container my="md">
      <Title align="center" mb="lg" mt="sm">
        Houses ({totalHouses})
      </Title>
      <Grid m="lg">
        <Grid.Col md={12}>
          <FilterMenu {...filterMenuProps} />
        </Grid.Col>

        {data.map((page, index) => {
          // Normalize data
          const houses = toHouses(page);

          return (
            <Fragment key={index}>
              {houses.map(({ coatOfArms, id, name, region, words }) => (
                <Grid.Col sm={6} key={name}>
                  <Paper radius="md" withBorder p="lg">
                    <Text ta="center" fz="lg" weight={500} mt="md" mb="xs">
                      {name}
                    </Text>
                    {coatOfArms ? (
                      <Text ta="center" c="dimmed" fz="sm" mb="xs">
                        {coatOfArms}
                      </Text>
                    ) : null}
                    {region ? (
                      <Text ta="center" c="dimmed" fz="sm" mb="xs">
                        Region: {region}
                      </Text>
                    ) : null}
                    {words ? (
                      <Text ta="center" c="dimmed" fz="sm" mb="xs">
                        Famous last words: {words}
                      </Text>
                    ) : null}

                    <Link href={sanitizeUrl(`house/${id}/${name}/`)} passHref>
                      <Paper radius="sm" withBorder p="xs" mt="lg" bg="blue" w="50%" m="auto">
                        <Text ta="center" c="white" fz="sm" weight={500} underline>
                          Enter house
                        </Text>
                      </Paper>
                    </Link>
                  </Paper>
                </Grid.Col>
              ))}
            </Fragment>
          );
        })}

        <Grid.Col>
          <Button
            display="block"
            bg="orange"
            m="auto"
            pr={12}
            leftIcon={<IconRotate size="1rem" stroke={1.5} />}
            onClick={() => setSize(size + 1)}
          >
            Load More
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
