import { useContext } from 'react';
import ConfigContext from '../components/config-context';
import UserProfile from '../modules/sso/components/avatar';

const LoginInfo = () => {
  const { hideLogin } = useContext(ConfigContext);
  return hideLogin ? null : <UserProfile />;
};

export default LoginInfo;
