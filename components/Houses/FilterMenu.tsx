import { Button, Text } from '@mantine/core';
import { IconMedal, IconGrave, IconArmchair2 } from '@tabler/icons-react';

type FilterMenuProps = {
  hasDiedOut: boolean;
  setHasDiedOut: (arg0: boolean) => void;
  hasTitles: boolean;
  setHasTitles: (arg0: boolean) => void;
  hasSeats: boolean;
  setHasSeats: (arg0: boolean) => void;
};

export const FilterMenu = ({
  hasDiedOut,
  setHasDiedOut,
  hasTitles,
  setHasTitles,
  hasSeats,
  setHasSeats,
}: FilterMenuProps) => {
  return (
    <>
      <Text>Filter by:</Text>
      <Button
        leftIcon={<IconGrave size="1rem" stroke={1.5} />}
        pr={12}
        mr="xs"
        mb="xs"
        onClick={() => setHasDiedOut(!hasDiedOut)}
        variant={hasDiedOut ? 'outline' : 'filled'}
      >
        Has died out
      </Button>
      <Button
        leftIcon={<IconMedal size="1rem" stroke={1.5} />}
        pr={12}
        mr="xs"
        mb="xs"
        onClick={() => setHasTitles(!hasTitles)}
        variant={hasTitles ? 'outline' : 'filled'}
      >
        Has titles
      </Button>
      <Button
        leftIcon={<IconArmchair2 size="1rem" stroke={1.5} />}
        pr={12}
        onClick={() => setHasSeats(!hasSeats)}
        variant={hasSeats ? 'outline' : 'filled'}
      >
        Has seats
      </Button>
    </>
  );
};
