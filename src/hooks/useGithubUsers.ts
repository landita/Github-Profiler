import axios from 'axios';
import { showNotification } from '@mantine/notifications';
import { GithubUser } from '../interfaces';

interface Props {
  setUserInfo: (user: GithubUser) => void;
}

export const useGithubUsers = ({ setUserInfo }: Props) => {
  const getGithubUser = async (username: string) => {
    try {
      setUserInfo({ isLoading: true });
      const { data } = await axios.get<GithubUser>(
        `https://api.github.com/users/${username}`,
      );
      setUserInfo({ ...data, isLoading: false });
    } catch (error) {
      setUserInfo({});
      showNotification({
        color: 'red',
        autoClose: 5000,
        title: 'Error Notification',
        message: 'This user does not exists',
      });
    }
  };

  return {
    getGithubUser,
  };
};
