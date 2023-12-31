import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogged } from 'redux/selectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogged = useSelector(selectIsLogged);

  return isLogged ? <Navigate to={redirectTo} /> : Component;
};
