import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  color: black;
  margin-right: 10px;

  &.active {
    color: red;
  }
`;
