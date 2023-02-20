import * as Yup from 'yup';
import { Title, Image, Box, Stack, TextInput, Button } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';

const schema = Yup.object().shape({
  username: Yup.string().required(),
});

export const SearchForm = () => {
  const form = useForm({
    validate: yupResolver(schema),
    validateInputOnBlur: true,
    validateInputOnChange: true,
    initialValues: {
      username: '',
    },
  });

  return (
    <Stack align='center'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}>
        <Title fw={600} order={3}>
          Github-Profiler
        </Title>
        <Image src='/octocat.svg' height={60} width={60} />
      </Box>
      <Box w={{ lg: '75%' }}>
        <form
          autoComplete='off'
          onSubmit={form.onSubmit((values) => {
            // eslint-disable-next-line no-console
            console.log(values);
          })}
          onReset={form.onReset}>
          <TextInput
            withAsterisk
            label='username'
            type='text'
            placeholder='search a username'
            error={form.isDirty()}
            {...form.getInputProps('username')}
          />
          <Button mt={20} type='submit' disabled={!form.isValid()}>
            Submit
          </Button>
        </form>
      </Box>
    </Stack>
  );
};
