import * as Yup from 'yup';
import { Title, Image, Box, Stack, TextInput, Button } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { GithubUser } from '../../interfaces';
import { useGithubUsers } from '../../hooks/useGithubUsers';

interface Props {
  setUserInfo: (user: GithubUser) => void;
}

const schema = Yup.object().shape({
  username: Yup.string().required(),
});

export const SearchForm = ({ setUserInfo }: Props) => {
  const form = useForm({
    validate: yupResolver(schema),
    validateInputOnBlur: true,
    validateInputOnChange: true,
    initialValues: {
      username: '',
    },
  });

  const { getGithubUser } = useGithubUsers({ setUserInfo });

  return (
    <Stack align='center' w={{ xs: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <Title fw={600} order={3}>
          Github-Profile
        </Title>
        <Image src='/octocat.svg' height={60} width={60} />
      </Box>
      <Box w='100%'>
        <form
          autoComplete='off'
          onSubmit={form.onSubmit((values) => {
            getGithubUser(values.username);
          })}
          onReset={form.onReset}
        >
          <TextInput
            withAsterisk
            label='username'
            type='text'
            placeholder='search a username'
            error={form.isDirty()}
            {...form.getInputProps('username')}
          />
          <Button
            color='indigo'
            mt={20}
            type='submit'
            disabled={!form.isValid()}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Stack>
  );
};
