import { Grid, Text } from '@mantine/core';
import { MemberContainer } from './MemberContainer';

type MembersProps = {
  memberUrls?: string[];
};

export const Members = ({ memberUrls }: MembersProps) => {
  const members = memberUrls
    ?.map((url) => <MemberContainer key={url} url={url} />)
    // Filter out empty results
    .filter((value) => value);

  return (
    <Grid m="lg">
      {members?.length ? (
        <>
          <Grid.Col xs={12}>
            <Text ta="center" fz="md" weight={500} mt="md">
              Members:
            </Text>
          </Grid.Col>
          {members}
        </>
      ) : (
        <Grid.Col xs={12}>
          <Text ta="center" c="dimmed" fz="md" weight={400} mt="md">
            This house does not have any members.
          </Text>
        </Grid.Col>
      )}
    </Grid>
  );
};
