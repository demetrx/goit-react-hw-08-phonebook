import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/authSlice';

const RestrictedOutlet = ({ redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return !isLoggedIn ? <Outlet /> : <Navigate replace to={redirectTo} />;
};

export default RestrictedOutlet;
