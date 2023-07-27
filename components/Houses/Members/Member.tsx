import { createStyles, Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconGrave, IconBabyCarriage, IconGenderBigender, IconUser } from '@tabler/icons-react';
import { Member as MemberType } from '../../../lib/types';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.colors.pink[6], theme.colors.orange[6]),
    },
  },

  wrapper: {
    display: 'flex',
    marginTop: '.5rem',
    alignItems: 'center',
    color: theme.white,
  },

  name: {
    color: theme.colors[theme.primaryColor][9],
  },

  icon: {
    marginRight: theme.spacing.sm,
    backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][6]
    } 100%)`,
    backgroundColor: 'transparent',
  },
}));

interface MemberProps extends MemberType {}

export const Member = ({ culture, born, died, gender, name }: MemberProps) => {
  const { classes, cx } = useStyles();

  return (
    <Paper withBorder radius="md" className={classes.card} m="xl">
      <Text size="xl" weight={500} mt="md" className={classes.name}>
        {name}
      </Text>
      {culture ? (
        <div className={cx(classes.wrapper)}>
          <ThemeIcon size={40} radius="md" className={classes.icon}>
            <IconUser size="1.5rem" />
          </ThemeIcon>
          <Text size="sm" color="dimmed">
            {culture}
          </Text>
        </div>
      ) : null}
      {gender ? (
        <div className={cx(classes.wrapper)}>
          <ThemeIcon size={40} radius="md" className={classes.icon}>
            <IconGenderBigender size="1.5rem" />
          </ThemeIcon>
          <Text size="sm" color="dimmed">
            {gender}
          </Text>
        </div>
      ) : null}
      {born ? (
        <div className={cx(classes.wrapper)}>
          <ThemeIcon size={40} radius="md" className={classes.icon}>
            <IconBabyCarriage size="1.5rem" />
          </ThemeIcon>
          <Text size="sm" color="dimmed">
            {born}
          </Text>
        </div>
      ) : null}
      {died ? (
        <div className={cx(classes.wrapper)}>
          <ThemeIcon size={40} radius="md" className={classes.icon}>
            <IconGrave size="1.5rem" />
          </ThemeIcon>
          <Text size="sm" color="dimmed">
            {died}
          </Text>
        </div>
      ) : null}
    </Paper>
  );
};
