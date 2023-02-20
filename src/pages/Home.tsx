import { Container, Grid } from '@mantine/core';
import { SearchForm } from '../components/home';

const Home = () => {
  return (
    <Container fluid>
      <Grid
        sx={{
          margin: '150px auto',
        }}>
        <Grid.Col md={6}>
          <SearchForm />
        </Grid.Col>
        <Grid.Col md={6}></Grid.Col>
      </Grid>
    </Container>
  );
};
export default Home;
