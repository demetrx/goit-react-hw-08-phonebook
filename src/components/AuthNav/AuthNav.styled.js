import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
  color: black;
  margin-right: 10px;

  &.active {
    color: red;
  }
`;
