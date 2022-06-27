import { useSelector } from 'react-redux';
import { useLogoutMutation } from 'services/contacts-api';
import { authSelectors } from 'redux/authSlice';

const UserMenu = () => {
  const username = useSelector(authSelectors.getUserName);
  const [logout] = useLogoutMutation();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p>Welcome, {username}</p>
      <button type="button" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
