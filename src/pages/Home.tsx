import { Container, Grid } from '@mantine/core';
import { useState } from 'react';
import { DisplayInfo, SearchForm } from '../components/home';
import { GithubUser } from '../interfaces';

const Home = () => {
  const [user, setUser] = useState<GithubUser>({});

  const setUserInfo = (user: GithubUser) => {
    setUser(user);
  };

  return (
    <Container
      fluid
      sx={{
        margin: '60px auto',
      }}
    >
      <Grid
        gutter={0}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 50,
        }}
      >
        <Grid.Col md={4}>
          <SearchForm setUserInfo={setUserInfo} />
        </Grid.Col>
        <Grid.Col md={4}>
          <DisplayInfo user={user} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};
export default Home;
