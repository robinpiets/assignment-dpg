import { Header, Container, Text } from '@mantine/core';
import Link from 'next/link';

type BaseLayoutProps = { children: React.ReactNode };

export const BaseLayout = ({ children }: BaseLayoutProps) => (
  <>
    <Header height="40" mb={50}>
      <Container>
        <Link href="/" passHref>
          <Text c="black" size="xl" underline span>
            Home
          </Text>
        </Link>
      </Container>
    </Header>
    <main>{children}</main>
  </>
);
