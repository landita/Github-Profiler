import { Card, Image, Stack, Text, Button, Loader, Flex } from '@mantine/core';
import { GithubUser } from '../../interfaces';
import Octocat from '../../assets/octocat.png';

interface Props {
  user: GithubUser;
}

export const DisplayInfo = ({
  user: {
    login = 'Octocat',
    name = 'Octocat',
    location = 'Github',
    bio = `Don't mine me, I'm just a default value \uD83D\uDE00`,
    avatar_url = '',
    html_url = 'https://github.com/landita/github-profiler',
    isLoading = false,
  },
}: Props) => {
  return (
    <>
      {isLoading ? (
        <Flex direction='column' justify='center' align='center' h={481}>
          <Loader size='lg' />
        </Flex>
      ) : (
        <Card
          shadow='lg'
          p='lg'
          radius='md'
          withBorder
          w={{ lg: '400px' }}
          sx={{
            margin: '0 auto',
          }}
        >
          <Card.Section>
            <Image
              src={avatar_url === '' ? Octocat : avatar_url}
              height={250}
              alt='avatar'
              fit='fill'
            />
          </Card.Section>

          <Stack align='left' mt={10}>
            <Text weight={400}>
              <Text component='span' fw={700}>
                Login:
              </Text>{' '}
              {login}
            </Text>
            <Text weight={400}>
              {' '}
              <Text component='span' fw={700}>
                Name:
              </Text>{' '}
              {name}
            </Text>
            <Text weight={400}>
              {' '}
              <Text component='span' fw={700}>
                Location:
              </Text>{' '}
              {location}
            </Text>
            <Text weight={400}>
              {' '}
              <Text component='span' fw={700}>
                Bio:
              </Text>{' '}
              {bio}
            </Text>
          </Stack>

          <Button
            color='indigo'
            fullWidth
            mt='md'
            radius='md'
            component='a'
            href={html_url}
            target='_blank'
          >
            Go to Github Profile
          </Button>
        </Card>
      )}
    </>
  );
};
